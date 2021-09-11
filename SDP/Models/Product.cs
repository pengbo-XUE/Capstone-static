﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SDP.Models
{
    //this is the product model.... duh...
    [Serializable]
    public class Product 
    {
        //defualt constructor used for EF
        public Product() { }
        public Product(Guid id,string name, decimal price, bool onSpecial,
         string imgSrc, Consts.PTypes pType,
        decimal size, string brand, string discription,int count)
        {
            this.productId = id;
            this.title = name;
            this.price = price;
            this.onSpecial = onSpecial;
            this.imgUrl = imgSrc;
            this.productType = pType;
            this.packageQty = size;
            this.brand = brand;
            this.description = discription;
            this.count = count;
        }

        public Product( string title, Category category, Consts.Genders productGender, decimal price, bool onSpecial, string imgSrc, Consts.PTypes productType, decimal packageQty, Consts.Uom packageUmo, int packageWeight, string packageDims, string brand, string discription)
        {

            this.productId = Guid.NewGuid();
            this.title = title;
            this.category = category;
            this.productGender = productGender;
            this.price = price;
            this.onSpecial = onSpecial;
            this.imgUrl = imgSrc;
            this.productType = productType;
            this.packageQty = packageQty;
            this.packageUom = packageUmo;
            this.packageWeight = packageWeight;
            this.packageDims = packageDims;
            this.brand = brand;
            this.description = discription;
        }

        public Guid productId { get; set; }
        [Required]
        [Display(Name = "Product Name")]
        public string title { get; set; }
        [Required]
        [Display(Name = "Product Category")]
        public Category category { get; set; }
        [Required]
        [Display(Name = "Target Gender")]
        public Consts.Genders productGender { get; set; }
        [Required]
        public decimal price { get; set; }
        public string imgUrl { get; set; }
        [Required]
        public Consts.PTypes productType { get; set; }
        [Required]
        public decimal packageQty { get; set; }
        public Consts.Uom packageUom { get; set; }
        public int packageWeight { get; set; }
        public string packageDims { get; set; }
        public string description { get; set; }
        
        //prop that are not in the database 
        public string brand;
        public bool onSpecial;
        public int count= 1;
    }
}