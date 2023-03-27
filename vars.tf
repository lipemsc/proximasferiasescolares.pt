variable "resource_group_name" {
    description = "Resource group name to be created in your Azure account"
    type = string
}

variable "build_folder" {
    description = "Folder where the build files are created"
    type = string
}

variable "storage_account_name" {
    description = "Storage account name to be created. It must be unique"
    type = string
}