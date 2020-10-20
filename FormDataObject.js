function setOffenceValues(){
	setOffenceDetails()
	setNatureofOffence()
	setSeizureInformation()
	setSeizureVehicles()
	setOtherSeizures()
	setOffenderDetails()
	setMiscDetails()
}

function setOffenceDetails(){
	offenceDetails["OffenceReportNo"]= this.getField("txtOffenceReportNo").value
	offenceDetails["RFAndBeat"]= this.getField("txtRFBeat").value
	offenceDetails["Range"]= this.getField("txtRange").value
	offenceDetails["ForestOfficerName"]= this.getField("txtForestOfficerName").value
	offenceDetails["PlaceOfOffence"]= this.getField("txtPlaceOfOffence").value
	offenceDetails["PlaceOfOffenceDateTime"]= this.getField("txtOffenceDate").value + " " + this.getField("txtOffenceTime").value
	offenceDetails["PlaceOfOffenceGPS"]= this.getField("txtOffenceGPS").value
	offenceDetails["PlaceOfDetection"]= this.getField("txtPlaceOfDetection").value
	offenceDetails["PlaceOfDetectionDateTime"]= this.getField("txtDetectionDate").value + " " + this.getField("txtDetectionTime").value
	offenceDetails["PlaceOfDetectionGPS"]= this.getField("txtDetectionGPS").value
	offenceDetails["ViolationOfLaw"]= this.getField("txtViolationOfLaw").value
	offenceDetails["PenaltySection"]= this.getField("txtPenaltySection").value
	offenceDetails["PunishmentPeriod"]= this.getField("txtPunishmentPeriod").value

	// This logic is specific to handle "BlackWood"
	var FP =""
	var forestProduce = this.getField("cbForestProduces").getArray()
	if (forestProduce[0].value =="")
		FP = this.getField("cbForestProduce").value
	else
		FP = forestProduce[0].value
	offenceDetails["ForestProduce"]= FP
}

function setSeizureInformation(){
	var forestProduce = this.getField("cbForestProduces").getArray()
	var value	  = this.getField("txtValue").getArray()
	var quantity	  = this.getField("txtSeizerQuantity").getArray()
	var measurement	  = this.getField("cbQuantity").getArray()
	var logNo	  = this.getField("txtLogNo").getArray()
	var logLength	  = this.getField("txtLogLength").getArray()
	var logMidGirth	  = this.getField("txtLogMidGirth").getArray()
	var details	  = this.getField("txtSeizureOtherDetails").getArray()
	for (i=0;i<forestProduce.length;i++) {
		if (forestProduce[i].value != "Select") {
			offenceDetails["seizureObjects"][i]["ForestProduce"]	= forestProduce[i].value
			offenceDetails["seizureObjects"][i]["Value"]		= value[i].value
			offenceDetails["seizureObjects"][i]["Quantity"]		= quantity[i].value
			offenceDetails["seizureObjects"][i]["QuantityMeasurement"]= measurement[i].value
			offenceDetails["seizureObjects"][i]["LogNo"]		= logNo[i].value
			offenceDetails["seizureObjects"][i]["LogLength"]	= logLength[i].value
			offenceDetails["seizureObjects"][i]["LogMidGirth"]	= logMidGirth[i].value
			offenceDetails["seizureObjects"][i]["Details"]		= details[i].value
		}
	}
}

function setSeizureVehicles(){
	var vehicleNo = this.getField("txtVehicleNo").getArray()
	var make	  = this.getField("txtVehicleModel").getArray()
	var value	  = this.getField("txtVehicleValue").getArray()
	for (i=0;i<vehicleNo.length;i++) {
		offenceDetails["seizureVehicles"][i]["Number"]= vehicleNo[i].value
		offenceDetails["seizureVehicles"][i]["Model"]= make[i].value
		offenceDetails["seizureVehicles"][i]["Value"]= value[i].value
	}
}

function setOtherSeizures(){
	var otherSeizureName = this.getField("cbOtherSeizureName").getArray()
	var otherSeizureQuantity  = this.getField("txtOtherSeizureQuantity").getArray()
	var otherSeizureValue	= this.getField("txtOtherSeizureValue").getArray()
	for (i=0;i<otherSeizureName.length;i++) {
		offenceDetails["OtherSeizure"][i]["Name"]= otherSeizureName[i].value
		offenceDetails["OtherSeizure"][i]["Quantity"]= otherSeizureQuantity[i].value
		offenceDetails["OtherSeizure"][i]["Value"]= otherSeizureValue[i].value
	}
}

function setOffenderDetails(){
	var Name	= this.getField("txtAccusedName").getArray()
	var Age		= this.getField("txtAge").getArray()
	var Caste	= this.getField("cbCaste").getArray()
	var Nationality	= this.getField("cbNationality").getArray()
	var IDNo	= this.getField("txtIdentityNumber").getArray()
	var Address	= this.getField("txtAddress").getArray()
	for (i=0;i<Name.length;i++) {
		offenceDetails["offenderDetails"][i]["Name"]= Name[i].value
		offenceDetails["offenderDetails"][i]["Age"]= Age[i].value
		offenceDetails["offenderDetails"][i]["Caste"]= Caste[i].value
		offenceDetails["offenderDetails"][i]["Nationality"]= Nationality[i].value
		offenceDetails["offenderDetails"][i]["IdentityCardNo"]= IDNo[i].value
		offenceDetails["offenderDetails"][i]["Address"]= Address[i].value
	}
}

function setOffenceType(cChange) {
	offenceDetails["OffenceType"]= cChange
}


function setNatureofOffence() {
	var f = this.getField("lbNatureOfOffence")
	var a = f.currentValueIndices
	var offence = new Array()

	if (typeof a == "number")
	    offence.push(f.getItemAt(a,false))
	else {
	  for (var i=0; i<a.length;i++)
	      offence.push(f.getItemAt(a[i],false))
	}
	offenceDetails["NatureOfOffence"]= offence
}

function setOffenceLocation(cChange) {
	offenceDetails["OffenceLocation"]= cChange
}

function setMiscDetails() {
	offenceDetails["SeizureFPTotalValue"]= this.getField("txtTotalSeizureValue").value
	offenceDetails["SeizureTotalQuantity"]= this.getField("txtTotalSeizureQuantity").value
	offenceDetails["WitnessDetails"][0]= this.getField("txtWitnessDetails.0").value
	offenceDetails["WitnessDetails"][1]= this.getField("txtWitnessDetails.1").value
	offenceDetails["SeizedMaterialHandover"]= this.getField("txtSeizedMaterialHandover").value
	offenceDetails["OffenceCompoundability"] = this.getField("pbCompoundable").buttonGetCaption()
}

var offenceDetails = {
	"OffenceReportNo":"",
    "RFAndBeat":"",
	"Range":"",
	"ForestOfficerName":"",
	"OffenceType":"",
	"OffenceLocation":"",
	"ForestProduce":"",
	"NatureOfOffence":[],
	"PlaceOfOffence":"",
	"PlaceOfOffenceDateTime":"",
	"PlaceOfOffenceGPS":"",
	"PlaceOfDetection":"",
	"PlaceOfDetectionDateTime":"",
	"PlaceOfDetectionGPS":"",
	"ViolationOfLaw":"",
	"PenaltySection":"",
	"PunishmentPeriod":"",
	"seizureObjects": [
		{"ForestProduce":"","Value" : 0,"Quantity":"","QuantityMeasurement":"","LogNo":"","LogLength":"","LogMidGirth":"","Details":""},
		{"ForestProduce":"","Value" : 0,"Quantity":"","QuantityMeasurement":"","LogNo":"","LogLength":"","LogMidGirth":"","Details":""},
		{"ForestProduce":"","Value" : 0,"Quantity":"","QuantityMeasurement":"","LogNo":"","LogLength":"","LogMidGirth":"","Details":""}
	],
	"seizureVehicles": [
		{"Number":"","Model":"","Value":""},
		{"Number":"","Model":"","Value":""},
		{"Number":"","Model":"","Value":""}
	],
	"OtherSeizure":[
		{"Name":"","Quantity":"","Value": 0},
		{"Name":"","Quantity":"","Value": 0},
		{"Name":"","Quantity":"","Value": 0}
	],
	"offenderDetails": [
		{"Name":"","Nationality":"","Age":0,"Caste":"","IdentityCardNo":"","Address":""},
		{"Name":"","Nationality":"","Age":0,"Caste":"","IdentityCardNo":"","Address":""},
		{"Name":"","Nationality":"","Age":0,"Caste":"","IdentityCardNo":"","Address":""}
	],
	"WitnessDetails": ["",""],
	"SeizureFPTotalValue":"",
	"SeizureTotalQuantity":"",
	"SeizedMaterialHandover":"",
	"OffenceCompoundability":""
}
