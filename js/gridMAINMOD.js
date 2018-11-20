var gridMAINMOD = (function(){
    
// Private variables
    var layout;
    var Carousel;
    var appWindow;
    var HomeID;
    var templateID;


// Bind events ----------------------------------------------------------------------------------->
events.on("setCarousel", setCarousel);

function setCarousel(cellDesc){
    switch(cellDesc){

        case "home":
        Carousel.cells(HomeID).setActive();
            break;

        default:
        Carousel.cells(HomeID).setActive();
            break;
    }
}
// ------------------------------------------------------------------------------------------------>

// Private methods
    var _initMODS = function(){

        gridHOMEMOD.init(Carousel.cells(HomeID));
        
    };

// Public methods
    var init = function(tabBlock){

        layout = tabBlock.attachLayout({
            pattern: "1C",
            cells: [
                {id: "a", header: false}
            ]
        });

        Carousel = layout.cells("a").attachCarousel({
            item_width: "auto",
            item_height: "auto",
          }); 
          
          Carousel.hideControls();

          HomeID = Carousel.addCell();
         
        
          appWindow = new dhtmlXWindows();
          appWindow.attachEvent("onClose", function(win){
            win.hide();
            win.setModal(false);
            return false;
          });

          var scriptArray = [ aasisAssetData.getPaths("mods")+"gridHOMEMOD.js?v=" + Math.random()
                              
          
   
        ];

        var loaderPromise = scriptLoader.load(scriptArray);
        loaderPromise.then(function(){
            console.log("AAD MODS are loaded");
            _initMODS();
        }, function(err){
            console.log("An error occurred!");
            console.log(err);

            // Throw up error page
            //errorPage.setErrorPage(parent, "load");
        });

    };

    return{
        init: init
    }
})();