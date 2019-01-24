
var library = function()
{
  this.dropdownContent = function(id, ht, spd)
  {
    let height;
    let thisId = document.getElementById(id);
    if(
      thisId.style.height == 0 || 
      thisId.style.height == 0 + "px"
      )
    {
      height = 0;
      let dropMenu = setInterval(function(){
        height = height + spd;
        thisId.style.height = height + "px"; 
        if(height == ht)
        {
          clearInterval(dropMenu);
        }
      }, 1);
    }
    else
    {
      height = parseInt(thisId.style.height);
      let raiseMenu = setInterval(function(){
        height = height - spd;
        thisId.style.height = height + "px"; 
        if(height == 0)
        {
          clearInterval(raiseMenu);
        }
      }, 1);        
    }
  }

  this.tabbedMenu = function(id)
  {
   var contentArr = document.getElementById(id).childNodes; 
   var j;
   let btnArr = contentArr[1].childNodes;
   if(btnArr.length > 0)
   {
    for(let j = 0; j < btnArr.length; j++)
    {
      if(btnArr[j].nodeName == "BUTTON")
      {
        btnArr[j].addEventListener("click", function() {
          contentArr[3].childNodes[j].style.visibility = "visible";
          for(let a = 0; a < contentArr[3].childNodes.length; a++)
          {
            if(a != j && contentArr[3].childNodes[a].nodeName == "DIV")
            {
              contentArr[3].childNodes[a].style.visibility = "hidden";
            }
          }
        }, false);
      }
    }
  }
}

this.horizontalContentIn = function(id, wdth, spd)
{
  let width;
  let thisId = document.getElementById(id);
  if(
    thisId.style.width == 0 || 
    thisId.style.width == 0 + "%"
    )
  {
    thisId.style.visibility="visible";
    width = 0;
    let slideInContent = setInterval(function(){
      width = width + spd;
      thisId.style.width = width + "%"; 
      if(width == wdth)
      {
        clearInterval(slideInContent);
        let waitForClose = window.addEventListener("click", function() {
          thisId.style.width = 0 + "%"; 
          window.removeEventListener("click", waitForClose, false);
          ;}, false);
      }
    }, 2);
  }
}    

this.popupBox = function(id, id2, closeID)
{
  let thisId = document.getElementById(id);
  let thisId2 = document.getElementById(id2)
  if(thisId.style.visibility == "hidden" || thisId.style.visibility == "")
  {
    thisId.style.visibility = "visible";
    thisId2.style.visibility = "visible";
  }


  let close = document.getElementById(closeID);
  close.addEventListener("click", function() 
  {
    thisId.style.visibility = "hidden";
    thisId2.style.visibility = "hidden";
  }, false);
}



this.dropdownMenu = function(id)
{
  var currentElem = document.getElementById(id);
  var thisId = currentElem.childNodes[3];
  var menuMouseOv = false

  currentElem.addEventListener('click', animateMenu);

  window.addEventListener('click', function(){
    if(menuMouseOv === false)
    {
      closeMenu();
    }
  }, true);

  currentElem.addEventListener('mouseover', function(){
    menuMouseOv = true; 
  });
  currentElem.addEventListener('mouseout', function(){
    menuMouseOv = false; 
  });

  function animateMenu()
  {
    (thisId.style.display==="block") ? closeMenu() : openMenu();
  }

  function openMenu()
  {
    thisId.style.display="block";

  }

  function closeMenu()
  {
    thisId.style.display="none";
  }
}


this.stickyObject = function(id, ht)
{
  let stickyObj = document.getElementById(id);
  let stickyObjPos = stickyObj.offsetTop;

  window.addEventListener('scroll', function(){
    if(window.pageYOffset + ht >= stickyObjPos)
    {
      stickyObj.classList.add("flashy_sticky_object");
      stickyObj.style.top = ht + "px";
    }
    else
    {
      stickyObj.classList.remove("flashy_sticky_object");
    }

  });
}

this.notification = function(id, id2)
{
	let targetEl = document.getElementById(id);
	let hoverEl = document.getElementById(id2);
	targetEl.addEventListener('mouseover', function() {
		hoverEl.style.display = "block";
	});
	targetEl.addEventListener('mouseout', function() {
		hoverEl.style.display = "none";
	})
}

}

var flashyJS = new library();



