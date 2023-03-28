terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
  backend "azurerm" {}
}

provider "azurerm" {
  features {}
}

variable "types" {
  type = map(string)
  # description = "(optional) describe your variable"
  default = {
    ".html" = "text/html"
    ".css" = "text/css"
    ".webp" = "image/webp"
    ".png" = "image/png"
    ".json" = "text/json"
    ".map" = "text/map"
    ".js" = "text/javascript"
  }
}

resource "azurerm_resource_group" "ferias" {
  name     = var.resource_group_name
  location = "West Europe"
}

resource "azurerm_storage_account" "webstorageaccount" {
  name                     = var.storage_account_name
  resource_group_name      = azurerm_resource_group.ferias.name
  location                 = azurerm_resource_group.ferias.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  
  static_website {
    index_document = "index.html"
  }
}

resource "azurerm_storage_blob" "blobs" {
  depends_on = [azurerm_storage_account.webstorageaccount]
  
  for_each = fileset("${path.root}/${var.build_folder}", "**")
  name = each.key
  storage_account_name   = azurerm_storage_account.webstorageaccount.name
  storage_container_name = "$web"
  type                   = "Block"
  source                 = "${path.root}/build/${each.key}"
  content_type           = lookup(var.types, regex("\\.[^.]+$", each.value), null)
}

output "websiteurl" {
  value = azurerm_storage_account.webstorageaccount.primary_web_endpoint
  description = "Link to the deployed website"
}
