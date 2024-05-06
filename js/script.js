// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: yoochan
// Created on: Apr 2024
// This file contains the JS functions for index.html
function ShowAnswer() {
  const userage = document.getElementById("get_age").value
  const Tuesday = document.getElementById("option-2").checked
  const Thursday = document.getElementById("option-4").checked
  const discount = document.getElementById("option-discount1").checked
  //get user's answer
  if ((userage > 12 && userage < 21) || (Tuesday == 1 || Thursday == 1) || (discount == 1)) {
    document.getElementById("TheAnswer").innerHTML = "You can get a discount today!"
  }else {
    document.getElementById("TheAnswer").innerHTML = "There is no ticket discount today or you are not eligible."
  }
}