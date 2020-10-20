function SetWLOffenceSections(cNatureOfOffence,cOffenceLocation,cCompany,cNationality){
	var OffenceSections =  getWLOffenceSections(cNatureOfOffence,cOffenceLocation,cCompany)
	this.getField("txtViolationOfLaw").value = OffenceSections
}

function getWLOffenceSections(cNatureOfOffences,cOffenceLocation,cCompany){
	var definitionSec =""
	var mainSec = ""
	var offenceSections =""

	// Get the common offence Sections
	definitionSec = definitionSec +wlOffenceSections["COMMON"].Definition
	mainSec = mainSec + wlOffenceSections["COMMON"].Main

	// Get the location specific offence section
	definitionSec = definitionSec + wlOffenceSections[cOffenceLocation].Definition
	mainSec = mainSec + wlOffenceSections[cOffenceLocation].Main

	var nonCompoundable=String(wlOffencePenalty["NonCompoundable"][0])
	for (i=0;i<cNatureOfOffences.length;i++) {

		// Get the nature of offence related offence sections
		definitionSec = definitionSec + wlOffenceSections[cNatureOfOffences[i]].Definition
		mainSec = mainSec +wlOffenceSections[cNatureOfOffences[i]].Main

		// Get interjunction of "Nature of offence" and "offence Location" related offence sections
		var interjunctionSec = wlOffenceSections[cNatureOfOffences[i]+cOffenceLocation]
		if (interjunctionSec != undefined) {
			definitionSec = definitionSec + interjunctionSec.Definition
			mainSec = mainSec + interjunctionSec.Main
			if (interjunctionSec.NotApplicable == "true")
				return "Not Applicable"
		}

		//Exception remove the Non-Compoundable Section or compoundable section from NP and Sanctuary offence
		if (cOffenceLocation=="NP" || cOffenceLocation=="Sanctuary") {
			if ((nonCompoundable.indexOf(","+cNatureOfOffences[i]+cOffenceLocation+",")!= -1))
				mainSec = mainSec.replace("54,", "")
			else
				mainSec = mainSec.replace("54(4),", "")
		}
	}

	if (cCompany =="Yes")
		mainSec = mainSec + "58,"

	offenceSections = "1) WL(P) Act 1972 Sec 2" + objectOf(definitionSec) +"\n"+ removeDuplicates(mainSec)
	offenceSections = offenceSections + "\n" + wlOffenceSections["ForestOffence"].TN
	return offenceSections
}

function removeDuplicates(mainSec) {
	var arraySec = mainSec.split(",")
	var sec = arraySec.filter((a, b) => arraySec.indexOf(a) === b)    //Removes duplicates using filter function
	return sec.sort().toString()
}

function objectOf(sec){
	var val = removeDuplicates(sec).split(",")
	var asObj=""
	for (i=1;i<val.length;i++){
		asObj=asObj+"(" + val[i]+")"
	}
	return asObj
}

function SetWLOffencePenalty(cNatureOfOffence,cOffenceLocation,cCompany,cNationality){
	var penalty = ""
	var imprisonment = ""
	var NatureOfOffence=cNatureOfOffence[0]

	penalty = wlOffencePenalty["COMMON"].Penalty
	imprisonment = wlOffencePenalty["COMMON"].ImprisonmentAndFine

	//console.println("NatureOfOffence:"+ NatureOfOffence+":cOffenceLocation:"+ cOffenceLocation)

	var penaltyObject = wlOffencePenalty[NatureOfOffence]
	if (penaltyObject != undefined) {
		penalty = penaltyObject.Penalty
		if (NatureOfOffence == "Hunting" && (cOffenceLocation=="NP" || cOffenceLocation=="Sanctuary" ) )
			imprisonment = penaltyObject.ImprisonmentAndFine
		else if (NatureOfOffence != "Hunting")
			imprisonment = penaltyObject.ImprisonmentAndFine
	}

	penaltyObject = wlOffencePenalty[cOffenceLocation]
	if (penaltyObject != undefined) {
		penalty = penaltyObject.Penalty
		imprisonment = penaltyObject.ImprisonmentAndFine
	}

	// Highest Priority punishment
	penaltyObject = wlOffencePenalty[NatureOfOffence+cOffenceLocation]
	if (penaltyObject != undefined) {
		penalty = penaltyObject.Penalty
		imprisonment = penaltyObject.ImprisonmentAndFine
	}

	//Exception   --- Scheduled Animal and Hunting both are higher presidencies. In this specific case, its required to book the offence in Hunting in TRBuffer offence than Scheduled Animal in TRBuffer
	if (cOffenceLocation=="TRBuffer" && cNatureOfOffence.length>1 && cNatureOfOffence[1]=="Hunting") {
		 penaltyObject = wlOffencePenalty[cNatureOfOffence[1]+cOffenceLocation]
		 penalty = penaltyObject.Penalty
		 imprisonment = penaltyObject.ImprisonmentAndFine
	}

	// The corresponding Forest Offence for all WL offences
	penalty = "1)WL(P) Act 1972 Sec. " + penalty + "\n" + wlOffencePenalty["ForestOffence"].Penalty
	imprisonment = "1)"+imprisonment + wlOffencePenalty["ForestOffence"]["ImprisonmentAndFine"][0] + wlOffencePenalty["ForestOffence"]["ImprisonmentAndFine"][1]

	this.getField("txtPenaltySection").value = penalty
	this.getField("txtPunishmentPeriod").value = imprisonment

	//Update the compoundable offence button caption and tool tip
	setWLOffenceNonCompoundable(cNatureOfOffence,cOffenceLocation)
}

function setWLOffenceNonCompoundable(cNatureOfOffence,cOffenceLocation){
	// wlOffencePenalty["NonCompoundable"][0] contains the list of non-compoundable strings with comma delimiter
	var nonCompoundable = String(wlOffencePenalty["NonCompoundable"][0])

	//Load nature of offence face value
	setNatureofOffence()
	var displayString = (String(offenceDetails["NatureOfOffence"]) + " in " + offenceDetails["OffenceLocation"])
	var cCompoundable = ""
	var field = this.getField("pbCompoundable")

	//console.println("nonCompoundable:"+nonCompoundable+":displayString:"+ displayString)

	if ((nonCompoundable.indexOf(","+cNatureOfOffence+",")!= -1) || (nonCompoundable.indexOf(","+cOffenceLocation+",")!= -1) ||
		(nonCompoundable.indexOf(String(cNatureOfOffence+cOffenceLocation))!= -1)){
		if (cOffenceLocation.indexOf("TRCore") != -1)
		      displayString = "Any Offence in Tiger Reserve Core Area is non compoundable offence as per Sec. 51(1C)(1D) of WL(P) Act 1972"
		else if (displayString.indexOf("1972")== -1)
		      displayString = displayString + " is non compoundable offence as per Sec. 51(1), 54(4) of WL(P) Act 1972"

		cCompoundable ="Non-Compoundable, How?"
		field.toolTip = displayString
	} else {
		cCompoundable ="Compoundable, How?"
		displayString = displayString + ", offence can be compoundable as per Sec. 51(1),54 of WL(P) Act"
	}
	field.buttonSetCaption(cCompoundable)
	field.userName = displayString
}

function SetOffenceSections(cNatureOfOffences,cOffenceLocation,cOffenceForestProduce,cCompany,cOffenderNationality){
	var OffenceSections =  getOffenceSections(cNatureOfOffences,cOffenceForestProduce,cOffenceLocation,cCompany)
	this.getField("txtViolationOfLaw").value = OffenceSections
}

function getOffenceSections(cNatureOfOffences,cOffenceForestProduce,cOffenceLocation,cCompany) {

	var cOffenceCategory = cOffenceForestProduce + cOffenceLocation
	//console.println("CNatureOfOffences:"+cNatureOfOffences + ":cOffenceCategory:"+ cOffenceCategory)

	//TR other than Core area, NP and Sanctuary offence sections are same as RF. This is to avoid larger number definition.
	//Also add "DisturbWLLifecycle" to include WL related sections
	if (cOffenceLocation=="TRBuffer"|| cOffenceLocation =="NP"||cOffenceLocation=="Sanctuary"){
		cOffenceCategory =cOffenceForestProduce + "RF"
		cNatureOfOffences.push("DisturbWLLifecycle")
	}

	//Collect all the nature of offences. Use the common offence sections for "DisturbWLLifecycle" if its not declared for specific forest type.
	var offence = []
	for (i=0;i<cNatureOfOffences.length;i++) {
		if (cNatureOfOffences[i] == "DisturbWLLifecycle")
			if (forestOffenceSections[cOffenceLocation]==undefined)
		                         offence = offence.concat(forestOffenceSections["Common"][cNatureOfOffences[i]])
			else
		                          offence = offence.concat(forestOffenceSections[cOffenceLocation][cNatureOfOffences[i]])
		else
		             offence = offence.concat(forestOffenceSections[cOffenceCategory][cNatureOfOffences[i]])
	}

	//Sort the array to get the law in sequence then process each array element.
	//Split Law name and its section in two array elements using preformated "$" symbol (Pre-requirement)
	//If a same law available more than once, join those sections, second element (ie. array[1])
	//and then remove duplicate sections.
	offence.sort()
	var actName ="", previousActName ="", sections="", eachLaw =[], outputArray = []
	for (i=0; i<offence.length;i++) {

		//Incase of company committed the offence include section 58 in WL(P) Act or/and Sec. 7 for RoseWood offence
		if (cCompany == "Yes"){
			if (offence[i].indexOf("WL(P)") != -1) {
				offence[i] = offence[i] + "58,"
			}else if (offence[i].indexOf("TN.R.W Trees (c)") != -1)
				offence[i] = offence[i] + "7,"
			else if (offence[i].indexOf("B.D.Act") != -1)
				offence[i] = offence[i] + "57,"
		}

		eachLaw = offence[i].split("$")                             // Split the Law name and its sections
		actName = eachLaw[0]

		//If "$" symbol is missing, consider as general instruction
		if (eachLaw[1] == undefined || eachLaw[1]==""){
		//	Save the existing information in an arry element
			if (previousActName !=" ")
				outputArray.push(previousActName + removeDuplicates(sections))
			outputArray.push(eachLaw[0])
		} else if ( i==0 || previousActName == actName){
			sections = sections + eachLaw[1]
		} else {
			outputArray.push(previousActName +removeDuplicates(sections))
			sections = eachLaw[1]
		}

		// Save the remaining (ie Last array element in array. Ignore the general instruction entry which is already takencare.
		if (i==(offence.length-1) && eachLaw[1] != undefined)
			outputArray.push(actName +removeDuplicates(sections))
		previousActName = actName
	}

	//Reset the sequence number
	for(i=0;i<outputArray.length;i++) {
		outputArray[i]= outputArray[i].replace(/^\d\)/g, (i+1)+") ")
		outputArray[i]= outputArray[i].replace(/Sec.,/g, "Sec.")
	}

	//Display each array element in newline
	return outputArray.join("\n")
}

function SetOffencePenalty(cNatureOfOffences,cOffenceLocation,cOffenceForestProduce,cCompany,cOffenderNationality){
	var PenaltyAndPunishment = getOffencePenalty(cNatureOfOffences,cOffenceLocation,cOffenceForestProduce,cCompany,cOffenderNationality)
	this.getField("txtPenaltySection").value = PenaltyAndPunishment[0]
	this.getField("txtPunishmentPeriod").value = PenaltyAndPunishment[1]
}


function getOffencePenalty(cNatureOfOffences,cOffenceLocation,cOffenceForestProduce,cCompany,cOffenderNationality){
	var returnObject = []
	var penaltyObject = []
	var cOffenceCategory = cOffenceForestProduce + cOffenceLocation
	//console.println("CNatureOfOffences:"+cNatureOfOffences + ":cOffenceCategory:"+ cOffenceCategory)

	//TR other than Core area, NP and Sanctuary offence sections are same as RF. This is to avoid larger number definition.
	if (cOffenceLocation=="TRBuffer"|| cOffenceLocation =="NP"||cOffenceLocation=="Sanctuary"){
		cOffenceCategory =cOffenceForestProduce + "RF"
	}

	// Collect all the penalty sections.
	for (i=0;i<cNatureOfOffences.length;i++) {
		//console.println("cNatureOfOffences:"+cNatureOfOffences[i])
		if (cNatureOfOffences[i] == "DisturbWLLifecycle"){
			if (forestOffenceSections[cOffenceLocation]==undefined){
				penaltyObject = penaltyObject.concat(forestOffenceSections["Common"]["PenaltyObjectName"]["Common"])
			} else {
				penaltyObject = penaltyObject.concat(forestOffenceSections[cOffenceLocation]["PenaltyObjectName"][cOffenceLocation])
			}
		} else {
			penaltyObject = penaltyObject.concat(forestOffenceSections[cOffenceCategory]["PenaltyObjectName"][cNatureOfOffences[i]])
		}
	}

	//Remove duplicate
	penaltyObject= removeDuplicateArrayElements(penaltyObject)

	var eachLaw = [], penalty = [], imprisonment = [], sections ="",previousActName="", actName=""
	for (i=0; i<penaltyObject.length; i++) {
		eachLaw = forestOffencePenalty[penaltyObject[i]]["Penalty"]
		actName = eachLaw[0]

		if ( i==0 || previousActName == actName){
			sections = sections + "," +eachLaw[1]
			imprisonment.push((forestOffencePenalty[penaltyObject[i]]["ImprisonmentAndFine"]).toString())
		} else {
			penalty.push(previousActName +removeDuplicates(sections))
			imprisonment.push((forestOffencePenalty[penaltyObject[i]]["ImprisonmentAndFine"]).toString())
			sections = eachLaw[1]
		}

		// Save the remaining (ie Last array element in array. Ignore the general instruction entry which is already takencare.
		if (i==(penaltyObject.length-1) && eachLaw[1] != undefined){
			penalty.push(actName+removeDuplicates(sections))
			imprisonment.push((forestOffencePenalty[penaltyObject[i]]["ImprisonmentAndFine"]).toString())
		}
		previousActName = actName
	}

	//Set the sequence number
	for(i=0;i<penalty.length;i++) {
		penalty[i]= (i+1) + ")" + penalty[i]
	}

	//Remove duplicate imprisonment, choose top three imprisonment and set the imprisonment sequence number
	imprisonment = chooseTopThreeImprisonmentDemand(imprisonment)

	returnObject[0] = penalty.join("\n")
	returnObject[1] = imprisonment.join("\n")
	return returnObject
}

function removeDuplicateArrayElements(arraySec) {
	var sec = arraySec.filter((value, index) => arraySec.indexOf(value) === index)    //Removes duplicates using filter function
	return sec.sort()
}

function chooseTopThreeImprisonmentDemand(aImprison){
	var imprison = removeDuplicateArrayElements(aImprison)

	//Include the logic to choose top three imprisonment ( Priority to larger "Shall be", then Larger "may be", then "open fine", then "larger fine"
	if (imprison.length>3) {
                      imprison.splice(3,imprison.length-3)
	}

	for(i=0;i<imprison.length;i++) {
		imprison[i]= imprison[i].replace(/^\d\)/g, (i+1)+") ")
	}
	return imprison
}

function QuaterGirth(iMidGirth,iLength){
       if (iMidGirth>0 && iLength>0)
	       return ((iMidGirth*iMidGirth*3.142*(iLength/100))/400000).toFixed(3)
}

function setEnableLogFields(iVisible){
	var logNo	  = this.getField("txtLogNo").getArray()
	var logLength	  = this.getField("txtLogLength").getArray()
	var logMidGirth	  = this.getField("txtLogMidGirth").getArray()
	for (i=0;i<logNo.length;i++) {
			logNo[i].display = iVisible
			logLength[i].display = iVisible
			logMidGirth[i].display =iVisible
	}
}

function setLogVolumeAndCompoundingMessage(cSeizureFP,cOffenceType){
	var field = this.getField("pbCompoundable")

	//Load nature of offence face value
	setNatureofOffence()

	if(cOffenceType =="ST" || cOffenceType =="NonST") {
	       if (cSeizureFP !="Sandal"){
		  this.getField("txtSeizerQuantity.0").value = QuaterGirth(this.getField("txtLogMidGirth.0").value, this.getField("txtLogLength.0").value)
		  this.getField("txtSeizerQuantity.1").value = QuaterGirth(this.getField("txtLogMidGirth.1").value, this.getField("txtLogLength.1").value)
		  this.getField("txtSeizerQuantity.2").value = QuaterGirth(this.getField("txtLogMidGirth.2").value, this.getField("txtLogLength.2").value)
		  this.getField("cbQuantity.0").value= "Cub.M"
		  this.getField("cbQuantity.1").value= "Cub.M"
		  this.getField("cbQuantity.2").value= "Cub.M"
	      }
	      this.getField("txtTotalSeizureValue").value= (this.getField("txtValue.0").value +  this.getField("txtValue.1").value +  this.getField("txtValue.2").value)
	      var quantity = ((this.getField("txtSeizerQuantity.0").value +  this.getField("txtSeizerQuantity.1").value +  this.getField("txtSeizerQuantity.2").value))
	      quantity = isNaN(quantity)?"":quantity.toFixed(3)
	      this.getField("txtTotalSeizureQuantity").value= quantity
	}

	if(cOffenceType =="ST" && this.getField("txtTotalSeizureValue").value>=10000 && cSeizureFP!="Sandal"){
			  field.buttonSetCaption("Non-Compoundable? How")
			  field.userName = "Seized " + cSeizureFP +", Forest produce, value greater than RS 10,000 is non-compoundable. AO to auction the non FP seizure under Sec 49B, 49A. For RF and Protected Area, Forest damaged cost also needs to be collected (Sec 21(i))."
	} else if(cOffenceType =="ST" && this.getField("txtTotalSeizureQuantity").value>=100 && cSeizureFP=="Sandal"){
			  field.buttonSetCaption("Non-Compoundable? How")
			  field.userName = "Seized " + cSeizureFP +", Forest produce, weight greater than 100 kg is non-compoundable. AO to auction the non FP seizure under Sec 49B, 49A. For RF and Protected Area, Forest damaged cost also needs to be collected (Sec 21(i))."
	} else if(cOffenceType =="ST" && this.getField("txtTotalSeizureQuantity").value<100 && cSeizureFP=="Sandal"){
			  field.buttonSetCaption("Compoundable? How")
			  field.userName = "Seized " + cSeizureFP +", Forest produce, weight less than 100 kg is compoundable. For non FP seizures release, it values assessed by AO need to be paid (Sec 55). For RF and Protected Area, Forest damaged cost also needs to be collected (Sec 21(i))."
	} else if(cOffenceType =="ST" && this.getField("txtTotalSeizureValue").value<10000 && cSeizureFP!="Sandal"){
			  field.buttonSetCaption("Compoundable? How")
			  field.userName = "Seized " + cSeizureFP +", Forest produce, value less than RS 10,000 is compoundable. For non FP seizures release, it values assessed by AO need to be paid (Sec 55). For RF and Protected Area, Forest damaged cost also needs to be collected (Sec 21(i))."
	}
}

//Reload Form Data
function loadFormData(cChangeEx){

	if (this.getField("cbLockChanges").value=="Yes") {
		  app.alert("Lock changes check box is enabled. Remove the check if you want to reload violation.")
	} else {
		  this.resetForm(["txtViolationOfLaw","txtPenaltySection","txtPunishmentPeriod","cbOffenceLocation","cbForestProduce","lbNatureOfOffence","txtRichText"])
		  this.getField("pbCompoundable").buttonSetCaption("Non-Compoundable, How?")
			if (cChangeEx =="BD") {
					this.getField("pbCompoundable").userName = "All BD offences are non-compoundable, as there is no provision to compound in BD Act."
			}else {
		  		this.getField("pbCompoundable").userName = "Is this compoundable offence?"
			}
		  if (cChangeEx !="") {
			  LoadLocationDropDown(cChangeEx)
			  LoadForestProduceDropDown(cChangeEx)
			  LoadNatureOfOffenceDropDown(cChangeEx,"")
			  LoadSeizureFPDropDown(cChangeEx)
			  LoadReports(cChangeEx)
			  SetDefaultSeizureFPMeasurement(cChangeEx,"")
		  }

		  if (cChangeEx =="ST" || cChangeEx=="NonST") {
			  setEnableLogFields(0)
		  } else if (cChangeEx =="WL" || cChangeEx =="BD") {
			  setEnableLogFields(1)
		  }
	}
}

// Reload the nature of offence on change of Offence location
function loadNatureOfOffence(cChangeEx,cFP){
	if (this.getField("cbLockChanges").value=="Yes") {
		  app.alert("Lock changes check box is enabled. Remove the check if you want to reload violation.")
	} else {
		  this.resetForm(["txtViolationOfLaw","txtPenaltySection","txtPunishmentPeriod"])
		  this.getField("pbCompoundable").value = "Non-Compoundable, How?"
		  if (this.getField("cbOffenceType").value !="WL" && cChangeEx!="")
			      LoadNatureOfOffenceDropDown(cChangeEx,cFP)
	}
}

function loadViolationOfLaw() {
	var offenceType = this.getField("cbOffenceType")
	var offenceLocation = this.getField("cbOffenceLocation")
	var forestProduce = this.getField("cbForestProduce")
	var offenceCompany = this.getField("cbCompany")
	var offenderNationality= this.getField("cbNationality")
	var offence = getNatureOfOffence()

	var indices = offence.currentValueIndices

	if (this.getField("cbLockChanges").value=="Yes") {
		  app.alert("Lock changes check box is enabled. Remove the check if you want to reload violation.")
	}else if (indices == -1 || offenceLocation.value == ""|| offenceLocation.value == "Select"||forestProduce.value == "Select") {
		  // Check the required values are selected
		  this.resetForm(["txtViolationOfLaw","txtPenaltySection","txtPunishmentPeriod"])
		  app.alert("Choose Offence Location, Forest Produce and Nature of Offence (HOLD Ctrl for multi select)")
	} else {
		 //Collect the list of offences made over

		 if (offenceType.value =="WL") {
		      SetWLOffenceSections(offence,offenceLocation.value,offenceCompany.value,offenderNationality.value)
		      SetWLOffencePenalty(offence,offenceLocation.value,offenceCompany.value,offenderNationality.value)
		 } else {
		     SetOffenceSections(offence,offenceLocation.value,forestProduce.value,offenceCompany.value,offenderNationality.value)
		     SetOffencePenalty(offence,offenceLocation.value,forestProduce.value,offenceCompany.value,offenderNationality.value)
		 }

		if ( this.getField("txtViolationOfLaw").value  == "Not Applicable") {
		     this.getField("txtPenaltySection").value = "Not Applicable"
		     this.getField("txtPunishmentPeriod").value = "Not Applicable"
		}
	  }

}

//onMouseUp of "Non-Compoundable, How?" button call the displayCompoundableMessage function
function displayCompoundableMessage(){

	var alertObject={cMsg:"", nIcon:0}
	if (this.getField("txtViolationOfLaw").value =="") {
		 alertObject.cMsg = "Load the violation of Law"
		 alertObject.nIcon = 0
	} else if (this.getField("cbOffenceType").value=="WL") {
		 alertObject.cMsg = this.getField("pbCompoundable").userName
		 alertObject.nIcon = 3
	} else if (this.getField("cbOffenceLocation").value == "TRCore") {
		 alertObject.cMsg = this.getField("pbCompoundable").userName
		 alertObject.nIcon = 3
	} else {
		 var FP =this.getField("cbForestProduces.0").value
		 var value =this.getField("txtValue.0").value
		 var Qty =this.getField("txtSeizerQuantity.0").value

		 if (FP=="" || FP=="Select" || value=="" || Qty==""){
			    alertObject.cMsg = "Select the Seizure Forest Produce, set its value and seziure quantity"
			    this.getField("pbCompoundable").userName = "Select the Seizure Forest Produce, set its value and seziure quantity"
			    alertObject.nIcon = 0
		 } else {
			    alertObject.cMsg = this.getField("pbCompoundable").userName
			    alertObject.nIcon = 3
		 }
	}
	app.alert(alertObject)
}

function getNatureOfOffence(){
	var offenceList = this.getField("lbNatureOfOffence")
	var offence = []
	var indices = offenceList.currentValueIndices
	if (typeof indices == "number") // A single selection
		offence.push(offenceList.getItemAt(indices,true))
	else{  // Multiple selection
		for (var i=0;i<indices.length;i++) {
		     var offenceNature = offenceList.getItemAt(indices[i],true)
		     // Exception requirement for WL offence: Combination of Hunting and Scheduled Animal needs to be punished under interjunction penalty.
		     // To meet this requirement, hunting needs to be in array index zero.
		     if (offenceNature =="Hunting" && offence[0] !="ScheduledAnimal")
			     offence[0]=offenceNature
		     else
			   offence.push(offenceNature)
		 }
	}
	return offence
}

function getUsageTips() {
	var usageTips = "Use this interactive form for the following requirement " +
	"\r \r1. To know Forest, WL and BD law sections for an offence. " +
	"\r           Fill Blue color and italic font form fields and then click \"Load Law Violations\" button. Select all possible offences in \"Nature of Offence\" list box by holding CTRL key." +
	"\r \r2. To know an offence is compoundable or non-compoundable and its law reference. " +
	"\r           a) For WL offence, load the offence details mentioned in point 1 and then " +
	"\r           click \"Non-Compoundable, How?\" button." +
	"\r           b) For ST/Non-ST, load the FP seizure details and then click \"Non-Compoundable, How?\" button." +
	"\r \r3. To know ST/Non-ST Timber volume calculation. (Formally known as Quater Girth formula)" +
	"\r           a) Fill Seizure FP, Length, mid-diameter (centimetre) to auto populate Volume in cubic meters." +
	"\r           b) Volume calculation is not applicable for Sandal Wood." +
	"\r \r4. To generate case documents for Seizure List, Measurement List, Confession Statement, Spot Magazar, Remand Report, Bail Objection and Form A." +
	"\r           a) Fill all the form fields." +
	"\r           b) Make the required changes (remove unwanted sections) in \"Violation of Law \" field." +
	"\r              Enable the \"Lock Section changes\" Checkbox to prevent accidental changes." +
	"\r           c) Choose the report that you want to generate and then click \"Generate Report\" button."+
	"\r           d) Copy the data populated in page 2 to MS word and make further required changes." +
	"\r           e) Use \"Save Form Data\" button to save this data in the local system(\"D:\ForestOffence.fdf\"). " +
	"\r               You can send this file to anyone or save it for later usage." +
	"\r           f) Use \"Load Form Data\" to load the previously saved data." +
	"\r           g) Use \"Import Form Data\" to load external form data." +
	"\r \r Known restrictions:"+
	"\r     1) \"Save form data\" don't work in Adobe Reader. Adobe don't allow to save data locally through scripting. Use Foxit reader to get rid of this issue." +
	"\r     2) Mobile device: Use Foxit PDF Android/iOS version. \"Adobe form\" Android App is not supporting interactive form well." +
	"\r     3) For BD Act, Prosecution documents or reports are not available now." +
	"\r \r For more information read each form field's tooltip (Mose over)."
	app.alert({cMsg:usageTips,nIcon:3})
}
