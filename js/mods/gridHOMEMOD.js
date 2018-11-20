var gridHOMEMOD = (function(){
    
    var layout;
    var form;
    var gridColumns;
    var gridColumns2;
    var archivedGrid;
    var recentSubmissionGrid;
    var tabbar;
    var toolbar;
    var printForm;
    var currentRowID;
    var popArray = [];
    var popArrayTax = [];
    var popCash;
    var popCK;
    var popDEBIT; 
    var popAMEX;
    var popVISA;
    var popDISC;
    var popMC;
    var popCRT;
    var numberOfSaleItems;
    var adjArray = {};
    var stID;
    var templateNames = [];
    var descriptionNames = {};
    var salesList;
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
        
          

    
    
    
    //////////////////////////////////////////////////////////////////
        
    // Public methods
    
    var init = function(cell){
        
    /////////////////////
    ///    LAYOUT   ////
    ///////////////////
    
    layout = cell.attachLayout({
    
        pattern: "1C",
        
              cells: [
    
                {id: "a", text: "Review Aasis Asset Data Here.", active:true, header: true},
                
                
              ]
        
        });
    
    /////////////////////
    ///    TAB BAR   ///
    ///////////////////
    
    tabbar = layout.cells("a").attachTabbar({
        tabs: [
            {id: "a1", text: "Archived Records", active: true},
       
        ]
    });
    
    
    //////////////////////////////
    ///   ARCHIVED  GRID       //  
    ////////////////////////////
    
    
    gridColumns2 = [
    
        {
            "columnName": "Business Date",
            "filter": "#select_filter",
            "type": "ro",
            "align": "left",
            "sort": "str",
            "width": "180",
            "dbColumn": "businessDate"
        },
    
        {
            "columnName": "Park",
            "filter": "#select_filter",
            "type": "ro",
            "align": "left",
            "sort": "str",
            "width": "180",
            "dbColumn": "Location"
        },
        
        {
            "columnName": "Facility",
            "filter": "#select_filter",
            "type": "ro",
            "align": "left",
            "sort": "str",
            "width": "150",
            "dbColumn": "Facility"
        },
    
        {
            "columnName": "Station",
            "filter": "#select_filter",
            "type": "ro",
            "align": "left",
            "sort": "str",
            "width": "150",
            "dbColumn": "Station"
        },
    
        {
            "columnName": "Shift",
            "filter": "#select_filter",
            "type": "ro",
            "align": "left",
            "sort": "str",
            "width": "140",
            "dbColumn": "stationShift"
        },
    ];
    
    gridCOMP.createGrid(tabbar.tabs("a1"), gridColumns2, true, "archivedGrid");
    
    archivedGrid = gridCOMP.getGrid(); 
    archivedGrid.attachFooter("<b>Total:</b>");
    archivedGrid.attachFooter("#stat_count");
    
    archivedGrid.load(cashReceipts2.getPaths("connectors")+"archivedGrid_CONNECTOR.php?columnData="+gridCOMP.getDBColumns("archivedGrid"), function(){
    
        dhtmlx.message.hide("recentLoadingBox");
    
        console.log(crConstants.currentLocation);
     
    
    });
    
    
            };
        
        ///////////////////////////////////////////////////////////////
        
            return{
                init: init
            }
        })();