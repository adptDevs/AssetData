var AasisDataView = (function(){

// Private variables here:

var layout;
var form;
var dataTab;
var dataGrid;

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
// Public methods:

    var init = function(tabbar, sectionACL){
    console.log("hey, why are you looking at the console?..");

//////////////////////////////////////////////////////////////////////////
///// Tabbar ////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////

        tabbar.addTab("meh", "View Data Here");

		dataTab = tabbar.tabs("meh");
        dataGrid =tabbar.tabs("meh").attachGrid();


        dataTab.setActive();


        gridColumns2 = [

            {
                "columnName": "anln1",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "180",
                "dbColumn": "anln1"
            },
        
            {
                "columnName": "anln2",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "180",
                "dbColumn": "anln2"
            },
            
            {
                "columnName": "anlkl",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "150",
                "dbColumn": "anlkl"
            },
        
            {
                "columnName": "bukrs",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "150",
                "dbColumn": "bukrs"
            },
        
            {
                "columnName": "txt50",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "200",
                "dbColumn": "txt50"
            },
            {
                "columnName": "txa50",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "200",
                "dbColumn": "txa50"
            },
            {
                "columnName": "anlhtxt",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "200",
                "dbColumn": "anlhtxt"
            },
            {
                "columnName": "ktoger",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ktoger"
            },
            {
                "columnName": "sernr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "sernr"
            },
            {
                "columnName": "invnr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "invnr"
            },
            {
                "columnName": "meins",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "meins"
            },
            {
                "columnName": "menge",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "menge"
            },
            {
                "columnName": "ivdat",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ivdat"
            },
            {
                "columnName": "inken",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "inken"
            },
            {
                "columnName": "invzu",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "invzu"
            },
            {
                "columnName": "aktiv",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "aktiv"
            },
            {
                "columnName": "deakt",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "deakt"
            },
            {
                "columnName": "zugdt",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "zugdt"
            },
            {
                "columnName": "zujhr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "zujhr"
            },
            {
                "columnName": "zuper",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "zuper"
            },
            {
                "columnName": "gsber",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "gsber"
            },
            {
                "columnName": "kostl",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "kostl"
            },
            {
                "columnName": "kostlv",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "kostlv"
            },
            {
                "columnName": "caufn",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "caufn"
            },
            {
                "columnName": "raumn",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "raumn"
            },
            {
                "columnName": "kfzkz",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "kfzkz"
            },
            {
                "columnName": "pernr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "pernr"
            },
            {
                "columnName": "geber",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "geber"
            },
            {
                "columnName": "fkber",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "fkber"
            },
            {
                "columnName": "grant_nbr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "200",
                "dbColumn": "grant_nbr"
            },
            {
                "columnName": "fistl",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "fistl"
            },
            {
                "columnName": "ps_psp_pnr2",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ps_psp_pnr2"
            },
            {
                "columnName": "ord41",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ord41"
            },
            {
                "columnName": "ord42",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ord42"
            },
            {
                "columnName": "gdlgrp",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "gdlgrp"
            },
            {
                "columnName": "lifnr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "lifnr"
            },
            {
                "columnName": "liefe",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "liefe"
            },
            {
                "columnName": "herst",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "200",
                "dbColumn": "herst"
            },
            {
                "columnName": "xneu_am",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "xneu_am"
            },
            {
                "columnName": "xgbr_am",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "xgbr_am"
            },
            {
                "columnName": "aibn1",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "aibn1"
            },
            {
                "columnName": "aibn2",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "aibn2"
            },
            {
                "columnName": "aibdt",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "aibdt"
            },
            {
                "columnName": "eaufn",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "eaufn"
            },
            {
                "columnName": "posnr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "posnr"
            },
            {
                "columnName": "vsart",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "vsart"
            },
            {
                "columnName": "vrsbg",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "vrsbg"
            },
            {
                "columnName": "vrsba",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "vrsba"
            },
            {
                "columnName": "vswrt",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "vswrt"
            },
            {
                "columnName": "gjahr",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "gjahr"
            },
            {
                "columnName": "afabe",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "afabe"
            },
            {
                "columnName": "afbktx",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "afbktx"
            },
            {
                "columnName": "afasl",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "afasl"
            },
            {
                "columnName": "ndjar",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ndjar"
            },
            {
                "columnName": "ndper",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ndper"
            },
            {
                "columnName": "afabg",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "afabg"
            },
            {
                "columnName": "ndabj",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ndabj"
            },
            {
                "columnName": "ndabp",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "ndabp"
            },
            {
                "columnName": "knafa",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "knafa"
            },
            {
                "columnName": "answl",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "answl"
            },
            {
                "columnName": "nbval",
                "filter": "#select_filter",
                "type": "ro",
                "align": "left",
                "sort": "str",
                "width": "140",
                "dbColumn": "nbval"
            },
         
        ];
        
        gridCOMP.createGrid(tabbar.tabs("meh"), gridColumns2, true, "aadGridStuff");
        
        aadGridStuff = gridCOMP.getGrid(); 
        aadGridStuff.attachFooter("<b>Total:</b>");
        aadGridStuff.attachFooter("#stat_count");
        aadGridStuff.enableSmartRendering(true,50);
        
       // dhtmlx.message({id: "recentLoadingBox", expire:35000, text: "<img src='/data/gifs/ghosty-success.gif' width='28' height='21'>&nbsp;Loading data. Please wait..."});
      // console.log(aasisAssetData.getPaths("connectors")+"aadGridStuff_GRID_CONNECTOR.php?cData="+gridCOMP.getDBColumns("aadGridStuff"));

        aadGridStuff.load(aasisAssetData.getPaths("connectors")+"aadGridStuff_GRID_CONNECTOR.php?cData="+gridCOMP.getDBColumns("aadGridStuff"), function(){
           dhtmlx.message.hide("recentLoadingBox");
        
        });


    
        }; 
    ///////////////////////////////////////////////////////////////
    
        return{
            init: init
        }
    })();