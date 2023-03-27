terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=3.0.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "ferias" {
  name     = var.resource_group_name
  location = "West Europe"
}

resource "azurerm_storage_account" "webstorageaccount" {
  name                     = "feriaswebpage"
  resource_group_name      = azurerm_resource_group.ferias.name
  location                 = azurerm_resource_group.ferias.location
  account_tier             = "Standard"
  account_replication_type = "GRS"
  static_website {
    index_document = "index.html"
  }
}

resource "azurerm_storage_blob" "blobs" {
  for_each = fileset("${path.root}/${var.build_folder}", "**")
  name = each.key
  storage_account_name   = azurerm_storage_account.webstorageaccount.name
  storage_container_name = "$web"
  type                   = "Block"
  source                 = "${path.root}/build/${each.key}"
  content_type           = ""
}
