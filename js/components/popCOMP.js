var popCOMP = (function(){
	var popContainer = {};
	var popForm;
	var attachFormID;
	var popData;
	var popDataType;
	var currentPop;

	events.on("destoryVFMS", destoryVFMS);

	function destoryVFMS(){
		popContainer = {};

		popForm = null;
		attachFormID = null;
		popData = null;
		popDataType = null;
		currentPop = null;
	}

	var _attachForm_onButtonClick = function(form, id, p){
		var ev = form.attachEvent("onButtonClick", function(name){
			if(name == id){
				if(p.isVisible()){
					p.hide();
				}else{
					p.show(id);
				}
			}
		});

		return ev;
	};

	var createPop = function(dataType, obj, objID, formData, objName){
		switch(dataType){
			case "form":
				var pop = new dhtmlXPopup({form: obj, id: objID});
					pop.attachForm(formData);

				var attachForm = obj;

				popContainer[objName] = popContainer[objName] || [];
				popContainer[objName].push([pop, _attachForm_onButtonClick(attachForm, objID, pop)]);

				currentPop = pop;
				break;

			case "toolbar":
				var pop = new dhtmlXPopup({toolbar: obj, id: objID});
					pop.attachForm(formData);

				popContainer[objName] = popContainer[objName] || [];
				popContainer[objName].push(pop);

				currentPop = pop;
				break;

			default:
				break;
		}
	};

	var getPopForm = function(){
		return currentPop._nodeObj.getForm();
	};

	return{
		createPop: createPop,
		getPopForm: getPopForm
	}
})();