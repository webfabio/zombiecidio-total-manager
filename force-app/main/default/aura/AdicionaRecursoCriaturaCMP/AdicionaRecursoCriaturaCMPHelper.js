({
	getRecursos : function(component, event) {
		let recordId = component.get("v.recordId");
        //console.log(recordId);
        
        let action = component.get("c.recuperaRecursos");
        
        action.setParams({
            recordId : recordId
        });
        action.setCallback(this,function(response){
        	let state = response.getState();
        	let errors = reponse.getError();
            
            console.log('>>> state::', state);
            console.log('>>> errors::', errors);
            if(state === "SUCCESS"){
                let rows = response.getReturnValue();
                
                for(var i=0; i< rows.lenght; i++){
                    var row = rows[i];
                    row.label = row.Name;
                    row.value = row.Id;
                }
                if(row){
                	component.set("v.recursosLst", rows);
                }
                
            }else{
                console.log('>>> errors::', errors);
            }
        });
        $A.enqueueAction(action);
	}
})