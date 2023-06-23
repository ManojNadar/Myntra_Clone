window.onload = () => {
  let mul_Section = document.getElementById("mul-section");
  let menProduct = JSON.parse(localStorage.getItem("myntraProducts"));
  let storeProduct = "";
  for (let i = 0; i < menProduct.length; i++) {
    let prodStructure = ` <div class="mul-img">
            <a href="./single-product.html">
              <p
                style="
                  background-color: rgb(243, 85, 129);
                  width: 25%;
                  clip-path: polygon(
                    0% 0%,
                    100% 0%,
                    calc(100% - 20px) 50%,
                    100% 100%,
                    0% 100%
                  );
            
                  color: white;
                  font-weight: bold;
                  font-size: 0.9em;
                  padding-left: 5px;
                  position: absolute;
                  top: 5%;
                "
              >
                New
              </p>
              <img
                src="${menProduct[i].productImage}"
                alt=""
              />
              <div class="inside-img">
                <p>4.5</p>
                <i class="fa-solid fa-star" style="color: #2aa24e"></i>
                <p>|</p>
                <p>355</p>
              </div>
            
              <div class="product-details">
                <h4>${menProduct[i].productName}</h4>
                <p>${menProduct[i].brandName}</p>
                <p>
                  <b>Rs.${menProduct[i].productPrice}</b> <span class="line-through">Rs. ${menProduct[i].discountPrice}</span>
                  <span class="span-color">Rs. (${menProduct[i].offer} % Off)</span>
                </p>
              </div>
            </a>
            </div>`;
    storeProduct += prodStructure;
    mul_Section.innerHTML = storeProduct;
  }
};

// #mul-section
