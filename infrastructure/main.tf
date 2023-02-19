provider "aws" {
  profile = "rw-cinema"
  region  = "us-east-2"
}

terraform {
  backend "s3" {
    bucket  = "rw-cinema-tf-state"
    key     = "rw-cinema.tfstate"
    region  = "us-east-2"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManagedBy   = "Terraform"
    Owner       = "Romaworks Cinema App"
  }
}

