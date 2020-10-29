var formFieldValues = null

var spanDefintion = {
	MeasurementList: [
		{Text: "", fontWeight: 800, fontSize : 18, alignment : "center", endParagraph: true,linespacing: 20},
		{Text: "",linespacing: 20},{Text: "",endParagraph: true,linespacing:20},{Text: "",linespacing:20},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	],
	SeizureList : [
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: "",endParagraph: true,linespacing:20},
		{Text: "",linespacing:20},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	],
	ConfessionStatement:[
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
		{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
		{Text: "",endParagraph: true,linespacing:20},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	],
	SpotMagazar:[
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
		{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
		{Text: "",endParagraph: true,linespacing:20},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	],
	ShowCauseNotice:[
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: ""},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
		{Text: ""},{Text: "",linespacing: 20},{Text: "",linespacing: 20},{Text: "",linespacing: 20},{Text: "",linespacing: 20},{Text: ""},{Text: ""},{Text: ""}
	],
	RemandReport:[
		{Text: "",alignment : "right"},
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: "",alignment : "left"},
		{Text: "",alignment : "left"},
		{Text: "",alignment : "left"},
		{Text: "",endParagraph: true,linespacing:20,alignment : "center"},
		{Text: "",fontWeight: 800,fontSize : 14},{Text: "",fontWeight: 800,fontSize : 14},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	],
	BailObjection:[
		{Text: "",alignment : "right"},
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: "",alignment : "left"},
		{Text: "",alignment : "left"},
		{Text: "",alignment : "left"},
		{Text: "",endParagraph: true,linespacing:20,alignment : "center"},
		{Text: "",fontWeight: 800,fontSize : 14},{Text: "",fontWeight: 800,fontSize : 14},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	],
	"Form95" : [
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: "",endParagraph: true,linespacing:20},
		{Text: "",linespacing:20},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	],
	FormA:[
		{Text: "",alignment : "right"},
		{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
		{Text: "",alignment : "center"},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},
		{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},
		{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
	]
}
var wlSpanDefintion = {
		SeizureList : [
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: "",endParagraph: true,linespacing:20},
			{Text: "",linespacing:20},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
		],
		ConfessionStatement:[
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
			{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
			{Text: "",endParagraph: true,linespacing:20},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
		],
		SpotMagazar:[
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
			{Text: "",endParagraph: true,linespacing:20},{Text: "",endParagraph: true,linespacing:20},
			{Text: "",endParagraph: true,linespacing:20},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
		],
		ShowCauseNotice:[
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: "",alignment : "center"},
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: ""},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: "",endParagraph: true,linespacing:20, alignment : "right"},
			{Text: ""},{Text: "",linespacing: 20},{Text: "",linespacing: 20},{Text: "",linespacing: 20},{Text: "",linespacing: 20},{Text: ""},{Text: ""},{Text: ""}
		],
		RemandReport:[
			{Text: "",alignment : "right"},
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: "",alignment : "left"},
			{Text: "",alignment : "left"},
			{Text: "",alignment : "left"},
			{Text: "",endParagraph: true,linespacing:20,alignment : "center"},
			{Text: "",fontWeight: 800,fontSize : 14},{Text: "",fontWeight: 800,fontSize : 14},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""}
		],
		BailObjection:[
			{Text: "",alignment : "right"},
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: "",alignment : "left"},
			{Text: "",alignment : "left"},
			{Text: "",alignment : "left"},
			{Text: "",endParagraph: true,linespacing:20,alignment : "center"},
			{Text: "",fontWeight: 800,fontSize : 14},{Text: "",fontWeight: 800,fontSize : 14},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""}
		],
		FormA:[
			{Text: "",alignment : "right"},
			{Text: "",fontWeight: 800,fontSize : 18,alignment : "center",endParagraph: true,linespacing: 20},
			{Text: "",alignment : "center"},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},
			{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: ""},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},{Text: "",fontWeight: 800,fontSize : 18},{Text: ""},
			{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""},{Text: ""}
		]
}
var bdSpanDefintion = {}

function initializeTemplateValues(cTemplateName,cOffenceType,cNatureOfOffence) {
	formFieldValues = new Array()
	var iIndex = 0

	if (cOffenceType == "ST" || cOffenceType == "NonST") {
		if (cTemplateName == "MeasurementList") {
			formFieldValues[iIndex] = "Measurement List for Logs\r"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["RFAndBeat"]) +" "+ String(offenceDetails["Range"]) +" range in STOR No:" + String(offenceDetails["OffenceReportNo"])
							+ " on "+  util.printd("mm/dd/yyyy", new Date()) + "."
			formFieldValues[++iIndex] = "\r\rThis offence has been committed in " + String(offenceDetails["PlaceOfOffence"]) + " on " +
							String(offenceDetails["PlaceOfOffenceDateTime"]) + " at GPS location -" +  String(offenceDetails["PlaceOfOffenceGPS"]) + "." +
							"This offence has been detected in " + String(offenceDetails["PlaceOfDetection"])+ " on " + String(offenceDetails["PlaceOfDetectionDateTime"]) +
							" at GPS location -" +  String(offenceDetails["PlaceOfDetectionGPS"])+ "."
			formFieldValues[++iIndex] = "\r \rS.No|   Log No    | Length(CM) |    Mid Girth (GM)   |   Volume (Metric)    |    Remarks"
			formFieldValues[++iIndex] = "\r    1.   " +  getLogMeasurmentDetails(0)
			formFieldValues[++iIndex] = "\r    2.   " +  getLogMeasurmentDetails(1)
			formFieldValues[++iIndex] = "\r    3.   " +  getLogMeasurmentDetails(2)
			formFieldValues[++iIndex] = "\r \r Above logs are seized by the forest officials under Sec. 41 of TNF Act 1882 on "+  util.printd("mm/dd/yyyy", new Date()) + " at ______ am/pm in H form number ________ dated ___________."
			formFieldValues[++iIndex] = "\r \r This list prepared by me                                             Prepared before me"
			formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO," +  String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\r \r Other forest staff signature"
			formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________ \r \r 2.Sd.________________________________"
		} else if (cTemplateName == "SeizureList") {
			iIndex=0
			formFieldValues[iIndex] = "Seizure List\r"
			formFieldValues[++iIndex] = "\r The following materials seized by forest officers under section 41 of TNF Act 1882. The properties seized in "+String(offenceDetails["RFAndBeat"]) +" " + String(offenceDetails["Range"]) +" range in STOR No:" + String(offenceDetails["OffenceReportNo"]) + " on "+  util.printd("mm/dd/yyyy", new Date()) + "."
			formFieldValues[++iIndex] = "\r \rS.No|           Name of Property       |        Quantity       |    Approximate Value"
			formFieldValues[++iIndex] = "\r    1. | " + getLogSeizure(0)
			formFieldValues[++iIndex] = "\r    2. | " + getLogSeizure(1)
			formFieldValues[++iIndex] = "\r    3. | " + getLogSeizure(2)
			formFieldValues[++iIndex] = "\r    4. | " + getVehicleSeizure(0)
			formFieldValues[++iIndex] = "\r    5. | " + getVehicleSeizure(1)
			formFieldValues[++iIndex] = "\r    6. | " + getOtherSeizure(0)
			formFieldValues[++iIndex] = "\r    7. | " + getOtherSeizure(1)
			formFieldValues[++iIndex] = "\r \rThis list prepared by me                                             Prepared before me"
			formFieldValues[++iIndex] = "\r \r Sd.____________________________	               Sd.____________________________"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO," + String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\rOther forest staff signature"
			formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________ \r \r 2.Sd.________________________________"
		} else if (cTemplateName == "ConfessionStatement") {
			iIndex=0

			var cConfession =""
			if (offenceDetails["OffenceCompoundability"].indexOf("Non-Compoundable")!=-1)
				cConfession = " We accept that our actions are violation of forest law."
			else
				cConfession = " We accept our offence and ready to pay compound fees levied by the forest officials at any time."

			formFieldValues[iIndex] = "Confession Statement\r"
			formFieldValues[++iIndex] = "\r" + util.printd("mm/dd/yyyy", new Date()) +"\r "
			formFieldValues[++iIndex] = "\rConfession statement given to "+ String(offenceDetails["Range"]) +" forest of Range officer in the presence of " +
							String(offenceDetails["ForestOfficerName"]) +" and their staff."
			formFieldValues[++iIndex] = "\r \rI am " + getOffenderDetails(0,false) + " giving this confession statement for the following forest offence."
			formFieldValues[++iIndex] = "\r \r Myself " + String(offenceDetails["offenderDetails"][0]["Name"]) +" and " + getOffenderDetails(1,false) +" went to " + String(offenceDetails["Range"]) +
						" range RF for cutting the " + String(offenceDetails["ForestProduce"]) +" logs and cut __ live " + String(offenceDetails["ForestProduce"]) +
						" trees and converted into __ pieces and carried in " + getVehicleDetails() + " from " + getPlaceOfOffence(false) +" to <offence captured/identified location with GPS reading> ." +
						" The forest official stopped, checked us and seized the logs with our vehicle near " + getPlaceOfDetection(false) +"."
			formFieldValues[++iIndex] = "\r \rWithout any order from forest official we illegally trespassed the " + String(offenceDetails["Range"]) +
						" and cut the live " + String(offenceDetails["ForestProduce"]) + " trees and carried the logs." + cConfession
			formFieldValues[++iIndex] = "\r \rThis confession is recorded as per our statements, it was read to me, I heard it clearly/ (Or I read it) and it is true."
			formFieldValues[++iIndex] = "\r \r A1) Sd._______________________________________"
			formFieldValues[++iIndex] = "\r \r A2) Sd._______________________________________"
			formFieldValues[++iIndex] = "\r This Statement recorded by me                                     Prepared before me"
			formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO,"+ String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\r \rOther forest staff signature                                         Local Witness"
			formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________		1.Sd.________________________________"
			formFieldValues[++iIndex] = "\r \r 2.Sd._______________________________		2.Sd.________________________________"
		} else if (cTemplateName == "SpotMagazar") {
			var higherNatureOfOffence = ""
			for (i=0;i<cNatureOfOffence.length;i++) {
				//In case of multi selection Possession hold highest priority then VehicleTransport hold higher priority and then AttemptToTransport
				higherNatureOfOffence = (higherNatureOfOffence.indexOf("Possession")!=-1?higherNatureOfOffence:(higherNatureOfOffence == "VehicleTransport"?(cNatureOfOffence[i].indexOf("Possession")!=-1?cNatureOfOffence[i]:higherNatureOfOffence):cNatureOfOffence[i]))
			}
			if (higherNatureOfOffence.indexOf("Possession")!=-1) {
				iIndex=0
				formFieldValues[iIndex] = "Spot Magazar\r"
				formFieldValues[++iIndex] = "\r " + util.printd("mm/dd/yyyy", new Date())
				formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ForestOfficerName"]) + " of " + String(offenceDetails["Range"]) + " and their subordinates inspected the " + getPlaceOfDetection(false) + ". The sawmill/house owner and two independent witnesses were present during this full course of inspection."
				formFieldValues[++iIndex] = "\r \rThe forest official identified more than 0.5 Cubic meter of illegal possession of " + String(offenceDetails["ForestProduce"]) + " logs without hammer axe, valid transit permit, the accounts of receipt and disposal of logs (Ie. Form III & IV) not maintained according to	TN Regulation of Wood Based Industry Rules 2010 Sec. 7 & 8. Forest official seized these illegal possession of scheduled timber logs under Sec. 41 of TNF Act 1882 and prepared the list of seizure. Handed over the duplicate copy of 'list of seized properties' to sawmill/house owner and received the acknowledgement in the original list of	properties statement."
				formFieldValues[++iIndex] = "\r \rThe forest officials have taken the seized materials to produce before the authorized officer (DFO/DCF) as per Sec. 41(3)(a), 49A, 49G(a) of TNF Act 1882."
				formFieldValues[++iIndex] = "\r \rExcept these seized materials, no other materials have not been taken or seized by the forest officials from the sawmill/house. During this inspection, the sawmill/house owner and staff/other members have not harassed and no damage or loss to the sawmill."
				formFieldValues[++iIndex] = "\r \rThis spot magazar is recorded before me, it was read to me, I heard it clearly/ (Or I read it) and it is true."
				formFieldValues[++iIndex] = "\r \r Sd._______________________________________"
				formFieldValues[++iIndex] = "\r _______ Sawmill/house Owner"
				formFieldValues[++iIndex] = "\r This magazar prepared by me                                             before me"
				formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
				formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                 VAO/FRO/Any Govt official/Panchayat president(optional)"
				formFieldValues[++iIndex] = "\r \rOther forest staff signature                                         Local Witness"
				formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________		1.Sd.________________________________"
				formFieldValues[++iIndex] = "\r \r 2.Sd._______________________________		2.Sd.________________________________"
			} else if (higherNatureOfOffence == "VehicleTransport") {
				iIndex=0
				formFieldValues[iIndex] = "Magazar \r"
				formFieldValues[++iIndex] = "\r" + util.printd("mm/dd/yyyy", new Date())
				formFieldValues[++iIndex] = "\r \r" + getVehicleDetails() + " loaded with " + String(offenceDetails["ForestProduce"]) + " logs stopped and inspected the transit permit near " + getPlaceOfDetection(false) + " by " + String(offenceDetails["ForestOfficerName"]) + " of " + String(offenceDetails["Range"]) + "and their subordinates during their on-road raid. The vehicle didn�t carry valid permit at the time of transit. Further, forest official checked the vehicle and on inquiry came to know the illegally cut and transported from " + getPlaceOfOffence(false) +"."
				formFieldValues[++iIndex] = "\r \rThe below signed offenders illegally trespassed, cut and transported the " +  String(offenceDetails["ForestProduce"]) + " logs from "+ String(offenceDetails["OffenceLocation"]) +" Plantation is against the Forest law. Forest official seized the forest produce, Vehicle and cutting & packing materials at the spot and brought to " + String(offenceDetails["Range"]) +" range office. Forest officials offloaded the logs, prepared the measurement list and hammer	mark of _______(example: Andipatti) Section are affixed in the logs, prepared the list of seizures and got the offenders signature with two independent local witnesses from _______ Village, recorded the confession statement from the accused."
				formFieldValues[++iIndex] = "\r \rThis magazar is recorded before me, it was read to me, I heard it clearly/ (Or I read it) and it is true."
				formFieldValues[++iIndex] = "\r \rA1) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \rA2) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \rA3) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r This magazar prepared by me                                             Prepared before me"
				formFieldValues[++iIndex] = "\r \rSd.____________________________	              Sd.____________________________"
				formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO,"+ String(offenceDetails["Range"])
				formFieldValues[++iIndex] = "\r Other forest staff signature                                         Local Witness"
				formFieldValues[++iIndex] = "\r \r1.Sd._______________________________		1.Sd.________________________________"
				formFieldValues[++iIndex] = "\r \r2.Sd._______________________________		2.Sd.________________________________"
			} else if (higherNatureOfOffence == "AttemptToTransport") {
				iIndex=0
				formFieldValues[iIndex] = "Magazar\r"
				formFieldValues[++iIndex] = "\r" + util.printd("mm/dd/yyyy", new Date())
				formFieldValues[++iIndex] = "\r \r On " +  String(offenceDetails["PlaceOfDetectionDateTime"]) + " in " + String(offenceDetails["RFAndBeat"]) +" " +String(offenceDetails["ForestOfficerName"]) + " of " + String(offenceDetails["Range"]) + " and their subordinates caught the offenders while they cut the ___ living Teak wood trees and converted into ______ pieces and it was ready for transportation, near " +  getPlaceOfOffence(false) +"."
				formFieldValues[++iIndex] = "\r \r The below signed offenders were illegally trespassed, cut andready to transport the " + String(offenceDetails["ForestProduce"]) + " logs from "+ String(offenceDetails["OffenceLocation"]) +" Plantation is against the Forest law. Forest official seized the forest produce, Vehicle and cutting & packing materials at the spot and brought to " + String(offenceDetails["Range"]) +" range office. Forest officials offloaded the logs, prepared the measurement list and hammer mark of _______(example: Andipatti) Section are affixed in the logs, prepared the list of seizures and	got the offenders signature with two independent local witnesses from _______ Village, recorded the confession statement from the accused."
				formFieldValues[++iIndex] = "\r This magazar is recorded before me, it was read to me, I heard it clearly/ (Or I read it) and it is true."
				formFieldValues[++iIndex] = "\r \r A1) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r A2) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r A3) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r This magazar prepared by me                                             Prepared before me"
				formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
				formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO,"+ String(offenceDetails["Range"])
				formFieldValues[++iIndex] = "\r \r Other forest staff signature                                         Local Witness"
				formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________		1.Sd.________________________________"
				formFieldValues[++iIndex] = "\r \r 2.Sd._______________________________		2.Sd.________________________________"
			}
		} else if (cTemplateName == "ShowCauseNotice") {
			iIndex=0
			formFieldValues[iIndex] = "NOTICE ISSUED UNDER SECTION 49 B OF TAMILNADU FOREST ACT 1882\r"
			formFieldValues[++iIndex] = "\r \rFOR / STOR " + String(offenceDetails["OffenceReportNo"]) + "                                                                    Authorized Officers and"
			formFieldValues[++iIndex] = " \r                                                                                   District Forest Officer"
			formFieldValues[++iIndex] = " \r                                                                                   __________________________"
			formFieldValues[++iIndex] = " \r                                                                                   __________________________"

			formFieldValues[++iIndex] = " \r                                                                             ____________________division"
			formFieldValues[++iIndex] = " \r                                                                                   Date: ________________"
			formFieldValues[++iIndex] = "\r \r SHOW CAUSE NOTICE \r"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["Range"]) + " range, Forest Range officer booked the STOR No." + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date()) + " for illegal transportation of " + String(offenceDetails["ForestProduce"]) + " logs in " + getVehicleSeizure(0) + " was bearing registered No. __________________________ from _____________________ to ______________________  without valid permit from the Tamilnadu Forest Department."
			formFieldValues[++iIndex] = "\r \rThe vehicle with " + String(offenceDetails["ForestProduce"]) + " sawn size seized by the " + String(offenceDetails["Range"]) + " range staffs under section 41 of T.N.F. Act 1882 and produced before me for further action as per Sec. 41(3) (a), 49A, 49 G(a) of T.N.F. Act 1882."
			formFieldValues[++iIndex] = "\r \rWe came to know that the vehicle is hypothecated by the finance company as mentioned in RC Book. Hence, notice issued to the finance company also."
			formFieldValues[++iIndex] = "\r \rYou are requested to give your explanation, why this vehicle may not be confiscated to Government as per sec. 49A,49G(a) of T.N.F. act 1882."
			formFieldValues[++iIndex] = "\r	\r 								AUTHORIZED OFFICERS"
			formFieldValues[++iIndex] = "\r									DFO / WLW"
			formFieldValues[++iIndex] = "\r									----------------------------------------------"
			formFieldValues[++iIndex] = "\r									----------------------------------------------"
			formFieldValues[++iIndex] = "\r To"
			formFieldValues[++iIndex] = "\r      1)	Thriu /Tmt __________________________________"
			formFieldValues[++iIndex] = "\r                            __________________________________"
			formFieldValues[++iIndex] = "\r                            __________________________________"
			formFieldValues[++iIndex] = "\r                            __________________________________"
			formFieldValues[++iIndex] = "\r copy to Forest Range Officer " + String(offenceDetails["Range"]) + " range"
			formFieldValues[++iIndex] = "\r for information necessary action."
		} else if (cTemplateName == "RemandReport") {
			iIndex=0
			formFieldValues[iIndex] = "Remand Request\r"
			formFieldValues[++iIndex] = "Tamil Nadu Forest Department\r"
			formFieldValues[++iIndex] = "\r From,                                                                                      To,"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"]) +"                                                     The Judicial magistrate"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range                                                               Judicial Court,___________\r "
			formFieldValues[++iIndex] = "\r STOR No:" + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date()) +"\r"
			formFieldValues[++iIndex] = "Sir,"
			formFieldValues[++iIndex] = "\rSubject:"
			formFieldValues[++iIndex] = " Request for remanding the accused related to scheduled timber offence under Sec 200 of Cr.P.C � regarding"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["Range"]) + " range forest officials caught the below list of accused during their inspection/raid. The accused trespassed the "+ String(offenceDetails["OffenceLocation"]) +", cut three living scheduled timber "+ String(offenceDetails["ForestProduce"]) + " trees, converted to logs and being loaded in " + getVehicleDetails() + " which is violation of forest law. The forest official got the offender details and seized the produce with vehicle under section 41 of TNF Act 1882 and brought to " + String(offenceDetails["Range"]) + " range office. Offence has been booked under"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ViolationOfLaw"])
			formFieldValues[++iIndex] = "\r \rIts punishable under sections"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PenaltySection"])
			formFieldValues[++iIndex] = "\r \rFor a period of"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PunishmentPeriod"])
			formFieldValues[++iIndex] = "\r \rForest officials prepared the measurement list and hammer mark of ____ Section are affixed in the logs, prepared the list of seizure and got the offenders signature with two independent local witnesses from ________ Village, recorded the accused confession statement. These documents will be produced along with filing �A Form� (Charge sheet)."
			formFieldValues[++iIndex] = "\r \rThe seized materials have been produced before the authorized officer (DFO/DCF) as per Sec. 41(3)(a), 49A, 49G(a) of TNF Act 1882. AO has issued showcase notice to the offender and confiscation procedure has been initiated as per Sec. 49B, 49A of TNF Act 1882."
			formFieldValues[++iIndex] = "\r \rAs per Sec 51 of TNF Act 1882, I have arrested the accused at ___ PM on " + util.printd("mm/dd/yyyy", new Date()) +" and produced before honorable magistrate along with required documents for judicial custody. I request the following accused to be remanded for 15 days in judicial custody under Sec 200 of Cr.PC (Private Complaint Procedure). Details of the accused follows"
			formFieldValues[++iIndex] = "\r 1." + getOffenderDetails(0,false)
			formFieldValues[++iIndex] = "\r 2." + getOffenderDetails(1,false)
			formFieldValues[++iIndex] = "\r \rThe charge sheet (A Form) may be submitted by IO (Forest Range Officer) in due course of time."
			formFieldValues[++iIndex] = "\r \rYours Sincerely"
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
		} else if (cTemplateName == "BailObjection") {
			iIndex=0
			formFieldValues[iIndex] = "Bail Objection\r"
			formFieldValues[++iIndex] = "Tamil Nadu Forest Department\r"
			formFieldValues[++iIndex] = "\rFrom,                                                                                      To,"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"]) +"                                                     The Judicial magistrate"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range                                                               Judicial Court,___________\r "
			formFieldValues[++iIndex] = "\r STOR No:" + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date()) +"\r"
			formFieldValues[++iIndex] = "Sir,\r "
			formFieldValues[++iIndex] = "Subject:"
			formFieldValues[++iIndex] = " Objection raised by the TN Forest Department - granting bail � Scheduled Timber offenders � Regarding"
			formFieldValues[++iIndex] = "\r \rRef: 1)" + String(offenceDetails["Range"]) + " range STOR NO:" + String(offenceDetails["OffenceReportNo"]) +" on <offence booking date>"
			formFieldValues[++iIndex] = "\r 2) TN Forest Act 1882 Sec. 56B, 56C, 56D"
			formFieldValues[++iIndex] = "\r \r"+ String(offenceDetails["ForestProduce"]) +" scheduled timber offence booked against the accused as per 1st reference sighted above and accused remanded in judicial custody on <offence booking date>. We came to know that the accused filed the bail petition in this honorable court. I bring the 2nd reference sighted above to your kind attention. It�s a scheduled timber offence, non-bailable as per section 56B, cognizable offence as per section 56C and presumption as to commission of the offence as per 56D of TNF Act 1882."
			formFieldValues[++iIndex] = "\r \rIt�s a premeditated forest offence against public property in "+ String(offenceDetails["OffenceLocation"]) +". We are in preliminary investigation stage to perambulate the offence location, seizing the forest produce are still in progress and searching other offenders as well. Releasing the accused on bail will affect the investigation process and the accused will tamper the evidence. The accused violated the following laws"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ViolationOfLaw"])
			formFieldValues[++iIndex] = "\r \rIts punishable under sections"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PenaltySection"])
			formFieldValues[++iIndex] = "\r \rFor a period of"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PunishmentPeriod"])
			formFieldValues[++iIndex] = "\r \rHence, I request the honorable court to dismiss the bail petition."
			formFieldValues[++iIndex] = "\r \rYours Sincerely"
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
		} else if (cTemplateName == "Form95") {
			iIndex=0
			formFieldValues[iIndex] = "Form 95\r"
			formFieldValues[++iIndex] = "\r The following seized materials produce before the honorable court as per section 41(3)(b) of TNF Act 1882. The forest officers seized these properties under section 41 of TNF Act 1882 from "+
						String(offenceDetails["RFAndBeat"]) +" " + String(offenceDetails["Range"]) +" range in OR No:" + String(offenceDetails["OffenceReportNo"]) + " on "+  util.printd("mm/dd/yyyy", new Date()) + "."
			formFieldValues[++iIndex] = "\r \rS.No|           Name of Property       |        Quantity       |    Approximate Value"
			formFieldValues[++iIndex] = "\r    1. | " + getLogSeizure(0)
			formFieldValues[++iIndex] = "\r    2. | " + getLogSeizure(1)
			formFieldValues[++iIndex] = "\r    3. | " + getLogSeizure(2)
			formFieldValues[++iIndex] = "\r    4. | " + getVehicleSeizure(0)
			formFieldValues[++iIndex] = "\r    5. | " + getVehicleSeizure(1)
			formFieldValues[++iIndex] = "\r    6. | " + getOtherSeizure(0)
			formFieldValues[++iIndex] = "\r    7. | " + getOtherSeizure(1)
			formFieldValues[++iIndex] = "\r \rThis list prepared by me                                             Prepared before me"
			formFieldValues[++iIndex] = "\r \r Sd.____________________________	               Sd.____________________________"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO," + String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\rOther forest staff signature"
			formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________ \r \r 2.Sd.________________________________"
		} else if (cTemplateName == "FormA") {
			iIndex=0
			formFieldValues[iIndex] = "Forest code Section 89.\r"
			formFieldValues[++iIndex] = "FORMS OF REPORTING FOREST OFFENCES\r"
			formFieldValues[++iIndex] = "\r From A \r"
			formFieldValues[++iIndex] = "\r Range - " + String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\r ----------------------------------------------"
			formFieldValues[++iIndex] = "\r Taluk - "
			formFieldValues[++iIndex] = "\r \rForest offence report: ST OR No:" + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date())
			formFieldValues[++iIndex] = "\r \r The Magistrate - <Location>"
			formFieldValues[++iIndex] = "\r ----------------------------------------------"
			formFieldValues[++iIndex] = "\r Divisional forest officer - <Division> "
			formFieldValues[++iIndex] = "\r \r1. Locality and date of offence"
			formFieldValues[++iIndex] = "\r Offence Forest: " + String(offenceDetails["OffenceLocation"])
			formFieldValues[++iIndex] = "\r Place and date: " + getPlaceOfOffence(false)
			formFieldValues[++iIndex] = "\r \r2. When, where and by whom detected; and by whom and when reported; number and date of report in Form H"
			formFieldValues[++iIndex] = "\r Detected by: " + String(offenceDetails["ForestOfficerName"]) + " " + String(offenceDetails["Range"]) + " Range"
			formFieldValues[++iIndex] = "\r Location: " + getPlaceOfDetection(false)
			formFieldValues[++iIndex] = "\r Form H: ___________________ dated _______________"
			formFieldValues[++iIndex] = "\r \r3. Number, Name, age, parent age, caste, calling and residence of accused; and if arrested, by whom, when and where."
			formFieldValues[++iIndex] = "\r A1. " + getOffenderDetails(0,true)
			formFieldValues[++iIndex] = "\r A2. " + getOffenderDetails(1,true)
			formFieldValues[++iIndex] = "\r Arrest detail: _______________________"
			formFieldValues[++iIndex] = "\r \r4. Nature of offence, and under what rule and section liable. If the offence is theft of forest produce, state whole quantity and value involved. If the offence is illegal grazing, state the number and description of the animals."
			formFieldValues[++iIndex] = "\r Nature of Offence : " + String(offenceDetails["NatureOfOffence"])
			formFieldValues[++iIndex] = "\r This offence is liable under"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ViolationOfLaw"])
			formFieldValues[++iIndex] = "\r \rIts punishable under sections"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PenaltySection"])
			formFieldValues[++iIndex] = "\r \rFor a period of"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PunishmentPeriod"])
			formFieldValues[++iIndex] = "\r \rForest produce total value Rs." + this.getField("txtTotalSeizureValue").value + " and total quantity " + this.getField("txtTotalSeizureQuantity").value + " " + this.getField("cbQuantity.0").value
			formFieldValues[++iIndex] = "\r \r5. Number, name, parent age, calling and residence of witnesses. Points on which each witness evidence is required."
			formFieldValues[++iIndex] = "\r PW1. " + String(offenceDetails["WitnessDetails"][0])
			formFieldValues[++iIndex] = "\r PW2. " + String(offenceDetails["WitnessDetails"][1])
			formFieldValues[++iIndex] = "\r PW3. <Eye witness>"
			formFieldValues[++iIndex] = "\r PW4. <Eye witness>"
			formFieldValues[++iIndex] = "\r <State when each witness evidence is required>"
			formFieldValues[++iIndex] = "\r \r6. Nature of the defence. State whether the accused is willing to compound."
			formFieldValues[++iIndex] = "\r Defence documents: \r 1) List of seizures \r 2) Measurement list \r 3) Confession Statement \r 4) Spot Magazar"
			formFieldValues[++iIndex] = "\r Compounding: " + this.getField("pbCompoundable").userName
			formFieldValues[++iIndex] = "\r Offender willing to compound:"
			formFieldValues[++iIndex] = "\r \r7.Description and value of produce and tools etc., seized and by whom and when"
			formFieldValues[++iIndex] = "\r The below propertied seized by " + String(offenceDetails["ForestOfficerName"]) + " "+ String(offenceDetails["Range"]) + " Range on " + String(offenceDetails["PlaceOfDetectionDateTime"])
			formFieldValues[++iIndex] = "\r S.No|           Name of Property       |        Quantity       |    Approximate Value"
			formFieldValues[++iIndex] = "\r   1. | " + getLogSeizure(0)
			formFieldValues[++iIndex] = "\r   2. | " + getLogSeizure(1)
			formFieldValues[++iIndex] = "\r   3. | " + getLogSeizure(2)
			formFieldValues[++iIndex] = "\r   4. | " + getVehicleSeizure(0)
			formFieldValues[++iIndex] = "\r   5. | " + getVehicleSeizure(1)
			formFieldValues[++iIndex] = "\r   6. | " + getOtherSeizure(0)
			formFieldValues[++iIndex] = "\r   7. | " + getOtherSeizure(1)
			formFieldValues[++iIndex] = "\r \r8. In whose charge and by whom and when left; and where the receipt is recorded"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["SeizedMaterialHandover"])
			formFieldValues[++iIndex] = "\r \r9. History of the case; nature and date of inquiry by the undersigned."
			formFieldValues[++iIndex] = "\r The offence location and time mentioned in 1st and 2nd point, the accused given in 3rd point, for the offence stated in 4th point, the witnesses in 5th point had investigated the offence and seized the materials listed in 7th point, got the confession statement and prepared other documents stated in 6th point and handover the seized materials to the officer given in 8th point. Based on the investigation the investigation officers prepared the Form A and submitted to court for judicial proceeing."
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
			formFieldValues[++iIndex] = "\r \rForwarded to the honourable judicial magistrate, _______________ for cognization of offence in the court of law."
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
		}
	} else if (cOffenceType == "WL") {
		if (cTemplateName == "SeizureList") {
			iIndex=0
			formFieldValues[iIndex] = "Seizure List\r"
			formFieldValues[++iIndex] = "\r The following materials seized by forest officers under Sec. 50 of WL(P) Act 1972. The properties seized in "+String(offenceDetails["RFAndBeat"]) +" " + String(offenceDetails["Range"]) +" range in WLOR No:" + String(offenceDetails["OffenceReportNo"]) + " on "+  util.printd("mm/dd/yyyy", new Date()) + "."
			formFieldValues[++iIndex] = "\r \rS.No|           Name of Property       |        Quantity       |    Approximate Value"
			formFieldValues[++iIndex] = "\r    1. | " + getLogSeizure(0)
			formFieldValues[++iIndex] = "\r    2. | " + getLogSeizure(1)
			formFieldValues[++iIndex] = "\r    3. | " + getLogSeizure(2)
			formFieldValues[++iIndex] = "\r    4. | " + getVehicleSeizure(0)
			formFieldValues[++iIndex] = "\r    5. | " + getVehicleSeizure(1)
			formFieldValues[++iIndex] = "\r    6. | " + getOtherSeizure(0)
			formFieldValues[++iIndex] = "\r    7. | " + getOtherSeizure(1)
			formFieldValues[++iIndex] = "\r \rThis list prepared by me                                             Prepared before me"
			formFieldValues[++iIndex] = "\r \r Sd.____________________________	               Sd.____________________________"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO," + String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\rOther forest staff signature"
			formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________ \r \r 2.Sd.________________________________"
		} else if (cTemplateName == "ConfessionStatement") {
			iIndex=0
			var cConfession =""
			if (offenceDetails["OffenceCompoundability"].indexOf("Non-Compoundable")!=-1)
				cConfession = "We accept that our actions are violation of Wildlife law."
			else
				cConfession = "We accept our offence and ready to pay compound fees levied by the forest officials and any time."

			formFieldValues[iIndex] = "Confession Statement\r"
			formFieldValues[++iIndex] = "\r" + util.printd("mm/dd/yyyy", new Date()) +"\r "
			formFieldValues[++iIndex] = "\rConfession statement given to "+ String(offenceDetails["Range"]) +" forest of Range officer in the presence of " +
							String(offenceDetails["ForestOfficerName"]) +" and their staff."
			formFieldValues[++iIndex] = "\r \rI am " + getOffenderDetails(0,false) + " giving this confession statement for the following wildlife offence."
			formFieldValues[++iIndex] = "\r \r Myself " + String(offenceDetails["offenderDetails"][0]["Name"]) +" and " + getOffenderDetails(1,false) +" went to " + String(offenceDetails["Range"]) +
						" range RF for \"" + String(offenceDetails["NatureOfOffence"]) + "\" and carried in " + getVehicleDetails() + " from " + getPlaceOfOffence(false) +" to <offence captured/identified location with GPS reading>." +
						" The forest official stopped, checked us and seized the wildlife produce with our vehicle near " + getPlaceOfDetection(false) +"."
			formFieldValues[++iIndex] = "\r \r We illegally trespassed the " + String(offenceDetails["Range"]) +
						" and committed \"" + String(offenceDetails["NatureOfOffence"]) + "\" offence." + cConfession
			formFieldValues[++iIndex] = "\r \r This confession is recorded as per our statements, it was read to me, I heard it clearly/ (Or I read it) and it is true."
			formFieldValues[++iIndex] = "\r \r A1) Sd._______________________________________"
			formFieldValues[++iIndex] = "\r \r A2) Sd._______________________________________"
			formFieldValues[++iIndex] = "\r \r This Statement recorded by me                                      Prepared before me"
			formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO,"+ String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\r \r Other forest staff signature                                         Local Witness"
			formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________		1.Sd.________________________________"
			formFieldValues[++iIndex] = "\r \r 2.Sd._______________________________		2.Sd.________________________________"
		} else if (cTemplateName == "SpotMagazar") {
			var higherNatureOfOffence = ""
			for (i=0;i<cNatureOfOffence.length;i++) {
				//In case of multi selection Possession hold highest priority then VehicleTransport hold higher priority and then AttemptToTransport
				higherNatureOfOffence = (higherNatureOfOffence.indexOf("Possession")!=-1?higherNatureOfOffence:(higherNatureOfOffence == "Transporting"?(cNatureOfOffence[i].indexOf("Possession")!=-1?cNatureOfOffence[i]:higherNatureOfOffence):cNatureOfOffence[i]))
			}
			if (higherNatureOfOffence.indexOf("Possession")!=-1 || higherNatureOfOffence.indexOf("Trading")!=-1 || higherNatureOfOffence.indexOf("Serving")!=-1) {
				iIndex=0
				formFieldValues[iIndex] = "Spot Magazar\r"
				formFieldValues[++iIndex] = "\r " + util.printd("mm/dd/yyyy", new Date())
				formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ForestOfficerName"]) + " of " + String(offenceDetails["Range"]) + " and their subordinates inspected the " + getPlaceOfDetection(false) + ". The resturant/house/hotel/vehicle owner/'authorized person' and two independent witnesses were present during this full course of inspection."
				formFieldValues[++iIndex] = "\r \rThe forest official identified illegal possession of " + String(offenceDetails["ForestProduce"]) + ". Forest official seized these illegal possession of wildlife under Sec. 50 of WL(P) Act 1972 and prepared the list of seizure. Handed over the duplicate copy of 'list of seized properties' to resturant/house owner and received the acknowledgement in the original list of	properties statement."
				formFieldValues[++iIndex] = "\r \rThe forest officials have taken the seized materials to produce before the authorized officer (DFO/DCF) as per Sec. 39(2)(3) of WL(P) Act 1972."
				formFieldValues[++iIndex] = "\r \rExcept these seized materials, no other materials have not been taken or seized by the forest officials from the resturant/hotel/house/vehicle. During this inspection, the resturant/vehicle/house owner and staff/other members have not harassed and no damage or loss to the premises."
				formFieldValues[++iIndex] = "\r \rThis spot magazar is recorded before me, it was read to me, I heard it clearly/ (Or I read it) and it is true."
				formFieldValues[++iIndex] = "\r \r Sd._______________________________________"
				formFieldValues[++iIndex] = "\r _______ resturant/hotel/vehicle/house Owner"
				formFieldValues[++iIndex] = "\r \r This magazar prepared by me                                             before me"
				formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
				formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                 VAO/FRO/Any Govt official/Panchayat president(optional)"
				formFieldValues[++iIndex] = "\r \rOther forest staff signature                                         Local Witness"
				formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________		1.Sd.________________________________"
				formFieldValues[++iIndex] = "\r \r 2.Sd._______________________________		2.Sd.________________________________"
			} else if (higherNatureOfOffence == "Transporting") {
				iIndex=0
				formFieldValues[iIndex] = "Magazar \r"
				formFieldValues[++iIndex] = "\r" + util.printd("mm/dd/yyyy", new Date())
				formFieldValues[++iIndex] = "\r \r" + getVehicleDetails() + " loaded with " + String(offenceDetails["ForestProduce"]) + " stopped and inspected near " + getPlaceOfDetection(false) + " by " + String(offenceDetails["ForestOfficerName"]) + " of " + String(offenceDetails["Range"]) + "and their subordinates during their raid. The vehicle carried had illegally possession of wildlife materials and transported from " + getPlaceOfOffence(false) +"."
				formFieldValues[++iIndex] = "\r \rThe below signed offenders illegally trespassed, hunted the wildlife and transported the " +  String(offenceDetails["ForestProduce"]) + " from "+ String(offenceDetails["OffenceLocation"]) +" is against the wildlife law. Forest official seized the produce, Vehicle and hunting & packing materials at the spot and brought to " + String(offenceDetails["Range"]) +" range office. Forest officials offloaded the produce, prepared the measurement list, prepared the list of seizures and got the offenders signature with two independent local witnesses from _______ Village, recorded the confession statement from the accused."
				formFieldValues[++iIndex] = "\r \rThis magazar is recorded before me, it was read to me, I heard it clearly/ (Or I read it) and it is true."
				formFieldValues[++iIndex] = "\r \rA1) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \rA2) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \rA3) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r This magazar prepared by me                                             Prepared before me"
				formFieldValues[++iIndex] = "\r \rSd.____________________________	              Sd.____________________________"
				formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO,"+ String(offenceDetails["Range"])
				formFieldValues[++iIndex] = "\r Other forest staff signature                                         Local Witness"
				formFieldValues[++iIndex] = "\r \r1.Sd._______________________________		1.Sd.________________________________"
				formFieldValues[++iIndex] = "\r \r2.Sd._______________________________		2.Sd.________________________________"
			} else if (higherNatureOfOffence.indexOf("Animal")!=-1 || higherNatureOfOffence.indexOf("Hunting")!=-1 ) {
				iIndex=0
				formFieldValues[iIndex] = "Magazar\r"
				formFieldValues[++iIndex] = "\r" + util.printd("mm/dd/yyyy", new Date())
				formFieldValues[++iIndex] = "\r \r On " +  String(offenceDetails["PlaceOfDetectionDateTime"]) + " in " + String(offenceDetails["RFAndBeat"]) +" " +String(offenceDetails["ForestOfficerName"]) + " of " + String(offenceDetails["Range"]) + " and their subordinates caught the offenders while they hunt the wildlife and converted into ______ pieces and it was ready for transportation, near " +  getPlaceOfOffence(false) +"."
				formFieldValues[++iIndex] = "\r \r The below signed offenders were illegally trespassed, hunted the wildlife and ready to transport the wildlife produce from "+ String(offenceDetails["OffenceLocation"]) +" is against the wildlife law. Forest official seized the produce, Vehicle and hunting & packing materials at the spot and brought to " + String(offenceDetails["Range"]) +" range office. Forest officials offloaded the produce, prepared the measurement list, prepared the list of seizures and	got the offenders signature with two independent local witnesses from _______ Village, recorded the confession statement from the accused."
				formFieldValues[++iIndex] = "\r This magazar is recorded before me, it was read to me, I heard it clearly/ (Or I read it) and it is true."
				formFieldValues[++iIndex] = "\r \r A1) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r A2) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r A3) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r This magazar prepared by me                                             Prepared before me"
				formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
				formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO,"+ String(offenceDetails["Range"])
				formFieldValues[++iIndex] = "\r \r Other forest staff signature                                         Local Witness"
				formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________		1.Sd.________________________________"
				formFieldValues[++iIndex] = "\r \r 2.Sd._______________________________		2.Sd.________________________________"
			} else {
				iIndex=0
				formFieldValues[iIndex] = "Magazar\r"
				formFieldValues[++iIndex] = "\r" + util.printd("mm/dd/yyyy", new Date())
				formFieldValues[++iIndex] = "\r \r On " +  String(offenceDetails["PlaceOfDetectionDateTime"]) + " in " + String(offenceDetails["RFAndBeat"]) +" " +String(offenceDetails["ForestOfficerName"]) + " of " + String(offenceDetails["Range"]) + " and their subordinates caught the offenders while ______, near " +  getPlaceOfOffence(false) +"."
				formFieldValues[++iIndex] = "\r \r The below signed offenders were illegally " + String(offenceDetails["NatureOfOffence"]) + " and possession of " + String(offenceDetails["ForestProduce"]) + " in "+ String(offenceDetails["OffenceLocation"]) +" is against the wildlife law. Forest official seized the produce, Vehicle and _____ materials at the spot and brought to " + String(offenceDetails["Range"]) +" range office. Forest officials prepared the list of seizures and	got the offenders signature with two independent local witnesses from _______ Village, recorded the confession statement from the accused."
				formFieldValues[++iIndex] = "\r This magazar is recorded before me, it was read to me, I heard it clearly/ (Or I read it) and it is true."
				formFieldValues[++iIndex] = "\r \r A1) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r A2) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r \r A3) Sd._______________________________________"
				formFieldValues[++iIndex] = "\r This magazar prepared by me                                             Prepared before me"
				formFieldValues[++iIndex] = "\r \r Sd.____________________________	              Sd.____________________________"
				formFieldValues[++iIndex] = "\r " + String(offenceDetails["ForestOfficerName"]) +"                                   FRO,"+ String(offenceDetails["Range"])
				formFieldValues[++iIndex] = "\r \r Other forest staff signature                                         Local Witness"
				formFieldValues[++iIndex] = "\r \r 1.Sd._______________________________		1.Sd.________________________________"
				formFieldValues[++iIndex] = "\r \r 2.Sd._______________________________		2.Sd.________________________________"
			}
		} else if (cTemplateName == "ShowCauseNotice") {
			iIndex=0
			formFieldValues[iIndex] = "NOTICE ISSUED BY DFO/ACF UNDER SEC. 50(1)(a), 50(5), 50(8)(b)(c) of WL(P) ACT 1972\r"
			formFieldValues[++iIndex] = " OR \r"
			formFieldValues[++iIndex] = " NOTICE ISSUED BY FORESTER/RANGER UNDER SEC. 50(1)(a), 50(5) of WL(P) ACT 1972\r"
			formFieldValues[++iIndex] = "\r \rFOR / WLOR " + String(offenceDetails["OffenceReportNo"]) + "                                                                    Authorized Officers and"
			formFieldValues[++iIndex] = " \r                                                                                   District Forest Officer/Wildlife warden/Forester"
			formFieldValues[++iIndex] = " \r                                                                                   __________________________"
			formFieldValues[++iIndex] = " \r                                                                                   __________________________"
			formFieldValues[++iIndex] = " \r                                                                             ____________________division"
			formFieldValues[++iIndex] = " \r                                                                                   Date: ________________"
			formFieldValues[++iIndex] = "\r \r SHOW CAUSE NOTICE \r"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["Range"]) + " range, Forest Range officer booked the WLOR No." + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date()) + " for illegal transportation of " + String(offenceDetails["ForestProduce"]) + " in " + getVehicleSeizure(0) + " was bearing registered No. __________________________ from _____________________ to ______________________ ."
			formFieldValues[++iIndex] = "\r \rThe vehicle with " + String(offenceDetails["ForestProduce"]) + " seized by the " + String(offenceDetails["Range"]) + " range staffs under section 50 of WL(P) Act 1972 and produced before me for further action as per Sec. 39 (2)(3) WL(P) Act 1972."
			formFieldValues[++iIndex] = "\r \rWe came to know that the vehicle is hypothecated by the finance company as mentioned in RC Book. Hence, notice issued to the finance company also."
			formFieldValues[++iIndex] = "\r \rYou are requested to give your explanation, why this vehicle may not be confiscated to Government as per sec. 39(3)(b) of WL(P). Act 1972."
			formFieldValues[++iIndex] = "\r	\r 								AUTHORIZED OFFICERS"
			formFieldValues[++iIndex] = "\r									DFO / WLW"
			formFieldValues[++iIndex] = "\r									----------------------------------------------"
			formFieldValues[++iIndex] = "\r									----------------------------------------------"
			formFieldValues[++iIndex] = "\r To"
			formFieldValues[++iIndex] = "\r      1)	Thriu /Tmt __________________________________"
			formFieldValues[++iIndex] = "\r                            __________________________________"
			formFieldValues[++iIndex] = "\r                            __________________________________"
			formFieldValues[++iIndex] = "\r                            __________________________________"
			formFieldValues[++iIndex] = "\r copy to Forest Range Officer " + String(offenceDetails["Range"]) + " range"
			formFieldValues[++iIndex] = "\r for information necessary action."
		} else if (cTemplateName == "RemandReport") {
			iIndex=0
			formFieldValues[iIndex] = "Remand Request\r"
			formFieldValues[++iIndex] = "Tamil Nadu Forest Department\r"
			formFieldValues[++iIndex] = "\r From,                                                                                      To,"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"]) +"                                                     The Judicial magistrate"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range                                                               Judicial Court,___________\r "
			formFieldValues[++iIndex] = "\r WLOR No:" + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date()) +"\r"
			formFieldValues[++iIndex] = "Sir,"
			formFieldValues[++iIndex] = "\rSubject:"
			formFieldValues[++iIndex] = " Request for remanding the accused related to wildlife offence under Sec 50 of WL(P) Act 1972, Sec 200 of Cr.P.C � regarding"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["Range"]) + " range forest officials caught the below list of accused during their inspection/raid. The accused committed wildlife offence "+ String(offenceDetails["NatureOfOffence"]) + " , transported in " + getVehicleDetails() + " which is violation of wildlife and forest law. The forest official got the offender details and seized the produce with vehicle under section 50 of WL(P) Act 1972 and brought to " + String(offenceDetails["Range"]) + " range office. Offence has been booked under"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ViolationOfLaw"])
			formFieldValues[++iIndex] = "\r \rIts punishable under sections"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PenaltySection"])
			formFieldValues[++iIndex] = "\r \rFor a period of"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PunishmentPeriod"])
			formFieldValues[++iIndex] = "\r \rForest officials prepared the list of seizure, got the offenders signature with two independent local witnesses from ________ Village and recorded the accused confession statement. These documents will be produced along with filing �A Form� (Charge sheet)."
			formFieldValues[++iIndex] = "\r \rThe seized materials have been produced before the authorized officer (DFO/DCF) as per 39(2)(3) of WL(P) Act 1972. AO has issued showcase notice under Sec. 50(1)(a), 50(5), 50(8)(b)(c) and confiscation procedure has been initiated as per Sec. 39(3) of WL(P) Act 1972."
			formFieldValues[++iIndex] = "\r \rAs per Sec 50(1-A) of WL(P) Act 1972, I have arrested the accused at ___ PM on " + util.printd("mm/dd/yyyy", new Date()) +" and produced before honorable magistrate along with required documents for judicial custody. I request the following accused to be remanded for 15 days in judicial custody under Sec 50 of WL(P) Act 1972 and Sec 200 of Cr.PC (Private Complaint Procedure). Details of the accused follows"
			formFieldValues[++iIndex] = "\r 1." + getOffenderDetails(0,false)
			formFieldValues[++iIndex] = "\r 2." + getOffenderDetails(1,false)
			formFieldValues[++iIndex] = "\r \rThe charge sheet (A Form) may be submitted by IO (Forest Range Officer) in due course of time."
			formFieldValues[++iIndex] = "\r \rYours Sincerely"
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
		} else if (cTemplateName == "BailObjection") {
			iIndex=0
			formFieldValues[iIndex] = "Bail Objection\r"
			formFieldValues[++iIndex] = "Tamil Nadu Forest Department\r"
			formFieldValues[++iIndex] = "\rFrom,                                                                                      To,"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"]) +"                                                     The Judicial magistrate"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range                                                               Judicial Court,___________\r "
			formFieldValues[++iIndex] = "\r WLOR No:" + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date()) +"\r"
			formFieldValues[++iIndex] = "Sir,\r "
			formFieldValues[++iIndex] = "Subject:"
			formFieldValues[++iIndex] = " Objection raised by the TN Forest Department - granting bail under Sec. 51A of WL(P) Act 1972 � Wildlife offenders � Regarding"
			formFieldValues[++iIndex] = "\r \rRef: " + String(offenceDetails["Range"]) + " range WLOR No:" + String(offenceDetails["OffenceReportNo"]) +" on <offence booking date>"
			formFieldValues[++iIndex] = "\r \r"+ String(offenceDetails["NatureOfOffence"]) +" wildlife offence booked against the accused as per reference sighted above and accused remanded in judicial custody on <offence booking date>. We came to know that the accused filed the bail petition in this honorable court. It’s a wildlife offence with compulsory punishment available under Sec. 51(1),(1C),(1D) of WL(P) Act 1972."
			formFieldValues[++iIndex] = "\r \rIt�s a premeditated wildlife offence against public property in "+ String(offenceDetails["OffenceLocation"]) +". We are in preliminary investigation stage to perambulate the offence location, seizing the produce are still in progress and searching other offenders as well. Releasing the accused on bail will affect the investigation process and the accused will tamper the evidence. The accused violated the following laws"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ViolationOfLaw"])
			formFieldValues[++iIndex] = "\r \rIts punishable under sections"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PenaltySection"])
			formFieldValues[++iIndex] = "\r \rFor a period of"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PunishmentPeriod"])
			formFieldValues[++iIndex] = "\r \rHence, I request the honorable court to dismiss the bail petition."
			formFieldValues[++iIndex] = "\r \rYours Sincerely"
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
		} else if (cTemplateName == "FormA") {
			iIndex=0
			formFieldValues[iIndex] = "Forest code Section 89.\r"
			formFieldValues[++iIndex] = "FORMS OF REPORTING FOREST OFFENCES\r"
			formFieldValues[++iIndex] = "\r From A \r"
			formFieldValues[++iIndex] = "\r Range - " + String(offenceDetails["Range"])
			formFieldValues[++iIndex] = "\r ----------------------------------------------"
			formFieldValues[++iIndex] = "\r Taluk - "
			formFieldValues[++iIndex] = "\r \rForest offence report: WLOR No:" + String(offenceDetails["OffenceReportNo"]) +" on "+  util.printd("mm/dd/yyyy", new Date())
			formFieldValues[++iIndex] = "\r \r The Magistrate - <Location>"
			formFieldValues[++iIndex] = "\r ----------------------------------------------"
			formFieldValues[++iIndex] = "\r Divisional forest officer - <Division> "
			formFieldValues[++iIndex] = "\r \r1. Locality and date of offence"
			formFieldValues[++iIndex] = "\r Offence Forest: " + String(offenceDetails["OffenceLocation"])
			formFieldValues[++iIndex] = "\r Place and date: " + getPlaceOfOffence(false)
			formFieldValues[++iIndex] = "\r \r2. When, where and by whom detected; and by whom and when reported; number and date of report in Form H"
			formFieldValues[++iIndex] = "\r Detected by: " + String(offenceDetails["ForestOfficerName"]) + " " + String(offenceDetails["Range"]) + " Range"
			formFieldValues[++iIndex] = "\r Location: " + getPlaceOfDetection(false)
			formFieldValues[++iIndex] = "\r Form H: ___________________ dated ____________"
			formFieldValues[++iIndex] = "\r \r3. Number, Name, age, parent age, caste, calling and residence of accused; and if arrested, by whom, when and where."
			formFieldValues[++iIndex] = "\r A1. " + getOffenderDetails(0,true)
			formFieldValues[++iIndex] = "\r A2. " + getOffenderDetails(1,true)
			formFieldValues[++iIndex] = "\r Arrest detail: _______________________"
			formFieldValues[++iIndex] = "\r \r4. Nature of offence, and under what rule and section liable. If the offence is theft of forest produce, state whole quantity and value involved. If the offence is illegal grazing, state the number and description of the animals."
			formFieldValues[++iIndex] = "\r Nature of Offence : " + String(offenceDetails["NatureOfOffence"])
			formFieldValues[++iIndex] = "\r This offence is liable under"
			formFieldValues[++iIndex] = "\r \r" + String(offenceDetails["ViolationOfLaw"])
			formFieldValues[++iIndex] = "\r \rIts punishable under sections"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PenaltySection"])
			formFieldValues[++iIndex] = "\r \rFor a period of"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["PunishmentPeriod"])
			formFieldValues[++iIndex] = "\r \rForest produce total value Rs." + this.getField("txtTotalSeizureValue").value + " and total quantity " + this.getField("txtTotalSeizureQuantity").value + " " + this.getField("cbQuantity.0").value
			formFieldValues[++iIndex] = "\r \r5. Number, name, parent age, calling and residence of witnesses. Points on which each witness evidence is required."
			formFieldValues[++iIndex] = "\r PW1. " + String(offenceDetails["WitnessDetails"][0])
			formFieldValues[++iIndex] = "\r PW2. " + String(offenceDetails["WitnessDetails"][1])
			formFieldValues[++iIndex] = "\r PW3. <Eye witness>"
			formFieldValues[++iIndex] = "\r PW4. <Eye witness>"
			formFieldValues[++iIndex] = "\r <State when each witness evidence is required>"
			formFieldValues[++iIndex] = "\r \r6. Nature of the defence. State whether the accused is willing to compound."
			formFieldValues[++iIndex] = "\r Defence documents: \r 1) List of seizures \r 2) Measurement list \r 3) Confession Statement \r 4) Spot Magazar"
			formFieldValues[++iIndex] = "\r Compounding: " + this.getField("pbCompoundable").userName
			formFieldValues[++iIndex] = "\r Offender willing to compound:"
			formFieldValues[++iIndex] = "\r \r7.Description and value of produce and tools etc., seized and by whom and when"
			formFieldValues[++iIndex] = "\r The below propertied seized by " + String(offenceDetails["ForestOfficerName"]) + " "+ String(offenceDetails["Range"]) + " Range on " + String(offenceDetails["PlaceOfDetectionDateTime"])
			formFieldValues[++iIndex] = "\r S.No|           Name of Property       |        Quantity       |    Approximate Value"
			formFieldValues[++iIndex] = "\r   1. | " + getLogSeizure(0)
			formFieldValues[++iIndex] = "\r   2. | " + getLogSeizure(1)
			formFieldValues[++iIndex] = "\r   3. | " + getLogSeizure(2)
			formFieldValues[++iIndex] = "\r   4. | " + getVehicleSeizure(0)
			formFieldValues[++iIndex] = "\r   5. | " + getVehicleSeizure(1)
			formFieldValues[++iIndex] = "\r   6. | " + getOtherSeizure(0)
			formFieldValues[++iIndex] = "\r   7. | " + getOtherSeizure(1)
			formFieldValues[++iIndex] = "\r \r8. In whose charge and by whom and when left; and where the receipt is recorded"
			formFieldValues[++iIndex] = "\r " + String(offenceDetails["SeizedMaterialHandover"])
			formFieldValues[++iIndex] = "\r \r9. History of the case; nature and date of inquiry by the undersigned."
			formFieldValues[++iIndex] = "\r The offence location and time mentioned in 1st and 2nd point, the accused given in 3rd point, for the offence stated in 4th point, the witnesses in 5th point had investigated the offence and seized the materials listed in 7th point, got the confession statement and prepared other documents stated in 6th point and handover the seized materials to the officer given in 8th point. Based on the investigation the investigation officers prepared the Form A and submitted to court for judicial proceeing."
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
			formFieldValues[++iIndex] = "\r \rForwarded to the honourable judicial magistrate, _______________ for cognization of offence in the court of law."
			formFieldValues[++iIndex] = "\r \rSd._______________________________________"
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["ForestOfficerName"])
			formFieldValues[++iIndex] = "\r" + String(offenceDetails["Range"]) + " Range"
		}
	} else if (cOffenceType == "BD") {
		// Yet to be included
	}
}

function setRichTextValue(){

	 var FP =this.getField("cbForestProduces.0").value
	 if (FP=="" || FP == "Select"){
		app.alert({cMsg:"Select the Seizure Forest Produce", nIcon:0})
		return
	}

	var cTemplateName = this.getField("cbReportGeneration").value
	var cOffenceType= this.getField("cbOffenceType").value
	var cNatureOfOffence= getNatureOfOffence()

	//console.println("setRichTextValue:"+cTemplateName+":"+cOffenceType)

	//Convert the form field to a JSON object
	setOffenceValues()
	initializeTemplateValues(cTemplateName,cOffenceType,cNatureOfOffence)

	//Load the Span Template object to a common name object
	var inputObject = new Object()
	if ( cOffenceType == "ST" || cOffenceType == "NonST") {
		inputObject = spanDefintion[cTemplateName]
	} else if (cOffenceType == "WL") {
		inputObject = wlSpanDefintion[cTemplateName]
	}else if (cOffenceType == "BD") {
		inputObject = bdSpanDefintion[cTemplateName]
	}

	var spanObjects = new Array()
	if (inputObject != undefined) {
//		if ( cOffenceType == "ST" || cOffenceType == "NonST") {
			for (i=0; i<inputObject.length; i ++)
				inputObject[i].Text = formFieldValues[i]
//		} else if (cOffenceType == "WL") {}

		for (i=0;i<inputObject.length; i++) {
			var spanElement = new Object()
			spanElement.paradir ="ltr"
			spanElement.text = inputObject[i].Text
			spanElement.fontWeight = inputObject[i].fontWeight != undefined ? inputObject[i].fontWeight : 400
			spanElement.fontSize = inputObject[i].fontSize != undefined? inputObject[i].fontSize : 14
			spanElement.alignment = inputObject[i].alignment != undefined? inputObject[i].alignment : "left"
			spanElement.linespacing = inputObject[i].linespacing != undefined ? inputObject[i].linespacing : 16
			spanElement.endParagraph = inputObject[i].endParagraph != undefined ? inputObject[i].endParagraph : false
			spanObjects.push(spanElement)
		}

		return spanObjects
	} else {
		console.println("Invalid argument passed:"+cTemplateName)
		return
	}
}

function getOffenderDetails (offenderSequence,bIncludeCaste) {
	if (String(offenceDetails["offenderDetails"][offenderSequence]["Name"]) != "")
		return String(offenceDetails["offenderDetails"][offenderSequence]["Name"])+", aged about " + String(offenceDetails["offenderDetails"][offenderSequence]["Age"]) + ", " +
		(bIncludeCaste? (" Caste " + String(offenceDetails["offenderDetails"][offenderSequence]["Caste"]) + ", "):"")
		+ String(offenceDetails["offenderDetails"][offenderSequence]["Address"]) + ", Govt ID " + String(offenceDetails["offenderDetails"][offenderSequence]["IdentityCardNo"]) + ", "
	else
		return ""
}

function getPlaceOfDetection(bTimeFirst) {
	if (bTimeFirst)
		return  "On " + String(offenceDetails["PlaceOfDetectionDateTime"]) + " in " + String(offenceDetails["PlaceOfDetection"]) + " at GPS " + String(offenceDetails["PlaceOfDetectionGPS"])
	else
		return String(offenceDetails["PlaceOfDetection"]) + " on " + String(offenceDetails["PlaceOfDetectionDateTime"]) + " at GPS " + String(offenceDetails["PlaceOfDetectionGPS"])
}

function getPlaceOfOffence(bTimeFirst) {
	if (bTimeFirst)
		return "On " + String(offenceDetails["PlaceOfOffenceDateTime"]) + " in " + String(offenceDetails["PlaceOfOffence"]) +" at GPS " + String(offenceDetails["PlaceOfOffenceGPS"])
	else
		return String(offenceDetails["PlaceOfOffence"]) + " on " + String(offenceDetails["PlaceOfOffenceDateTime"]) + " at GPS " + String(offenceDetails["PlaceOfOffenceGPS"])
}

function getVehicleDetails() {
	var vehicle = ""
	var seizureVehicle = offenceDetails["seizureVehicles"]
	for (i=0;i<seizureVehicle.length;i++){
		if (seizureVehicle[i]["Number"] !="")
			vehicle = vehicle + seizureVehicle[i]["Number"] + ", Model " + seizureVehicle[i]["Model"] + ", "
	}
	return vehicle
}


function addPadding(cString, iLength){
	//add required empty space  for padding. White space is taking approximately half of most characters width. So, Required empty space x 2 is giving approximately required padding
	var s = cString + "                                                                                                               "
	return s.substr(0,(cString.length+((iLength-cString.length)*2)))
}

function getLogMeasurmentDetails(iIndex) {
	var LogMeasure = ""
	if (offenceDetails["seizureObjects"][iIndex]["ForestProduce"] != "Select") {
		LogMeasure = addPadding(String(offenceDetails["seizureObjects"][iIndex]["LogNo"]),15) + " "+
		addPadding(String(offenceDetails["seizureObjects"][iIndex]["LogLength"]),10) +" " +
		addPadding(String(offenceDetails["seizureObjects"][iIndex]["LogMidGirth"]),15) +" " +
		String(offenceDetails["seizureObjects"][iIndex]["Quantity"])+ " "+String(offenceDetails["seizureObjects"][iIndex]["QuantityMeasurement"])
	}
	return LogMeasure
}

function getLogSeizure(iIndex) {
	var LogSeizure = ""
	if (offenceDetails["seizureObjects"][iIndex]["ForestProduce"] != "Select") {
		LogSeizure =	addPadding(String(offenceDetails["seizureObjects"][iIndex]["ForestProduce"]),25) + "  "+
				addPadding(String(offenceDetails["seizureObjects"][iIndex]["Quantity"])+ " "+String(offenceDetails["seizureObjects"][iIndex]["QuantityMeasurement"]),15) + " " +
				String(offenceDetails["seizureObjects"][iIndex]["Value"])
	}
	return LogSeizure
}

function getVehicleSeizure(iIndex) {
	var LogSeizure = ""
	if (offenceDetails["seizureVehicles"][iIndex]["Number"] != "") {
		LogSeizure =	addPadding(String(offenceDetails["seizureVehicles"][iIndex]["Number"])+ " "+String(offenceDetails["seizureVehicles"][iIndex]["Model"]),25) + " " +
				addPadding("  ",15)+  "    " +
				String(offenceDetails["seizureVehicles"][iIndex]["Value"])
	}
	return LogSeizure
}

function getOtherSeizure(iIndex) {
	var LogSeizure = ""
	if (offenceDetails["OtherSeizure"][iIndex]["Name"] != "") {
		LogSeizure =	addPadding(String(offenceDetails["OtherSeizure"][iIndex]["Name"]),25)+ "          " +
				addPadding(String(offenceDetails["OtherSeizure"][iIndex]["Quantity"]),13)+ " "+
				String(offenceDetails["OtherSeizure"][iIndex]["Value"])
	}
	return LogSeizure
}
