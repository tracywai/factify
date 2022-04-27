chrome.runtime.onMessage.addListener(
  function (call) 
  {
      if (call.action == "resize") 
      {
          var elem = document.getElementsByTagName('facts');
          elemLen = elem.length;
          for (var i = 0; i < elemLen; i++) 
          {
              if (elem[i].src == call.url) 
              {
                  elem[i].width = call.width;
                  elem[i].height = call.height;
              }
          }
      }
  });
