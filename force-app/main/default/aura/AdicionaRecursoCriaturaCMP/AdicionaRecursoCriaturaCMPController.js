({
	doInit : function(component, event, helper) {
		let recordId = component.get("v.recordId");
        helper.getRecursos(component, event);
        // alert(recordId);
	},
    
    handleChange: function (component, event, helper){
    	var selectedOptionValue = event.getParam("value");
        component.set("v.recursoSelecionado",selectedOptionValue);
        // alert("Option selected with value: " + selectedOptionValue + "!");
	}, 
    
    salvar: function (component, event, helper){
    	//var selectedOptionValue = event.getParam("value");
        //component.set("v.recursoSelecionado",selectedOptionValue);
        // alert("Option selected with value: " + selectedOptionValue + "!");
	} 
});