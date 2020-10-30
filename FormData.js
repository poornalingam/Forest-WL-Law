var dropdownFillData = {
	ST:{
		Location:
		[
			["Select","Select"],
			["Reserved Forest","RF"],
			["Reserved Land","RL"],
			["Unreserved Land","URL"],
			["Patta HP Act","PattaHP"],
			["Patta PP Act","PattaPP"],
			["Patta Other Categories","PattaOther"],
			["Transferred Territory Area","PattaTT"],
			["Tiger Reserve Core Area","TRCore"],
			["Tiger Reserve Other than Core Area","TRBuffer"],
			["National Park","NP"],
			["Sanctuary","Sanctuary"]
		],
		ForestProduce:
		[
			["Select","Select"],
			["Teak","Teak"],
			["Rose Wood","RoseWood"],
			["Sandal","Sandal"],
			["Red Sandal","RedSandal"],
			["Black Wood","Teak"]
		],
		NatureOfOffence:[""],
		Seizure:
		[
			["Select","Select"],
			["Teak","Teak"],
			["Rose wood","Rose Wood"],
			["Sandal","Sandal"],
			["Red Sandal","Red Sandal"],
			["Black Wood","Black Wood"]
		],
		Reports:[
			["Select","Select"],
			["Seizure List in H Form","SeizureList"],
			["Measurement List","MeasurementList"],
			["Confession Statement","ConfessionStatement"],
			["Spot Magazar","SpotMagazar"],
			["Show Cause Notice","ShowCauseNotice"],
			["Remand Report","RemandReport"],
			["Bail Objection","BailObjection"],
			["Form A","FormA"]
		]
	},
	NonST:{
		Location:
		[
			["Select","Select"],
			["Reserved Forest","RF"],
			["Reserved Land","RL"],
			["Unreserved Land","URL"],
			["Patta All Kinds","PattaOther"],
			["Tiger Reserve - Core Area","TRCore"],
			["Tiger Reserve - Other than Core Area","TRBuffer"],
			["National Park","NP"],
			["Sanctuary","Sanctuary"]
		],
		ForestProduce:
		[
			["Select","Select"],
			["Exempted Species","ExemptedSpecies"],
			["Non-Exempted Species","NonExemptedSpecies"]
		],
		NatureOfOffence:[""],
		Seizure:
		[
			["Select","Select"],
			["Exempted Species","Exempted Species"],
			["Non-Exempted Species","NonExempted Species"]
		],
		Reports:[
			["Select","Select"],
			["Seizure List in H Form","SeizureList"],
			["Measurement List","MeasurementList"],
			["Confession Statement","ConfessionStatement"],
			["Spot Magazar","SpotMagazar"],
			["Remand Report","RemandReport"],
			["Bail Objection","BailObjection"],
			["Form 95","Form95"],
			["Form A","FormA"]
		]
	},
	WL:{
		Location:
		[
			["Select","Select"],
			["Non-Protected Area","NonProtectedArea"],
			["Conser/Comm Reserve","ConAndComReserve"],
			["Tiger Reserve - Core Area","TRCore"],
			["Tiger Reserve - Other than Core Area","TRBuffer"],
			["National Park","NP"],
			["Sanctuary","Sanctuary"],
			["Specified Plant","SpecifiedPlant"]
		],
		ForestProduce: [""],
		NatureOfOffence:
		[
			["Scheduled Animal Related any offence","ScheduledAnimal"],
			["Hunting / Attempt to Hunt","Hunting"],
			["Alteration of Boundary","AlterationOfBoundary"],
			["Transporting","Transporting"],
			["Possession of WL or Specified Plant","Possession"],
			["Trading","Trading"],["Meat Serving","MeatServing"],
			["Encroachment","Encroachment"],
			["Not informing WL Death or WL offence","NotInformingWLDeath"],
			["Litter the ground","LitterTheGround"],
			["Divert water Or destory FP","DivertWater"],
			["Fire","Fire"],
			["Entry with weapon","EntryWithWeapon"],
			["Injurious Substances","InjuriousSubstances"],
			["Trespass and Halting","TrespassAndHalting"],
			["Immunization of Life Stock","ImmunizationOfLifeStock"],
			["Non Registration of Arms","NonRegistrationOfArms"]
		],
		Seizure:
		[
			["Select","Select"],
			["Hunting Materials","Hunting Materials"],
			["Carcass or Meat","Meat"],
			["Tusk","Tusk"],
			["Skin","Skin"],
			["By Product","By Product"],
			["Trophy","Trophy"],
			["Nest, Egg, Young WL","Damage Habitat"],
			["Camping Materials","Camping Materials"],
			["Other Materials","Other Materials"]
		],
		Reports:[
			["Select","Select"],
			["Seizure List in H Form","SeizureList"],
			["Confession Statement","ConfessionStatement"],
			["Spot Magazar","SpotMagazar"],
			["Show Cause Notice","ShowCauseNotice"],
			["Remand Report","RemandReport"],
			["Bail Objection","BailObjection"],
			["Form A","FormA"]
		]
	},
	BD:{
		Location:[["Any Location","AnyLocation"]],
		ForestProduce:
		[
			["Select","Select"],
			["Exempted BD Species","ExemptedBDSpecies"],
			["Non-Exempted BD Species","NonExemptedBDSpecies"]
		],
		NatureOfOffence:
		[
			["Possession-Indian","Possession"],
			["Possession-NRI or Foreigner","PossessionNRIForeigner"],
			["Illegal Seeking IP rights","IllegalSeekingIP"],
			["Illegal Transfer of knowledge","IllegalTransferKnowledge"],
			["Breaking and disobey - Order","BreakingDisobeyOrder"]
		],
		Seizure:
		[
			["Select","Select"],
			["Exempted BD Species","Exempted BD Species"],
			["Non-Exempted BD Species","NonExempted BD Species"]
    ],
		Reports:[]
	},
        RF:{
		NatureOfOffence:[
			["Trespass, Cut, Ready to Transport","AttemptToTransport"],
			["Trespass, Cut, Vehicle Transport","VehicleTransport"]
		]
	},
	RL:{
		NatureOfOffence:[
			["Trespass, Cut, Ready to Transport","AttemptToTransport"],
			["Trespass, Cut, Vehicle Transport","VehicleTransport"]
		]
	},
        URL:{
		NatureOfOffence:[
			["Cut, Ready to Transport","AttemptToTransport"],
			["Cut, Vehicle Transport","VehicleTransport"]
                ]
	},
	PattaOther:{
		NatureOfOffence:[
			["Cut, Ready to Transport","AttemptToTransport"],
			["Cut, Vehicle Transport","VehicleTransport"]
		]
	},
	PattaHP:{
		NatureOfOffence:
		[
			["Cut, Ready to Transport","AttemptToTransport"],
			["Cut, Vehicle Transport","VehicleTransport"]
		]
	},
	PattaPP:
	{
		NatureOfOffence:
		[
			["Cut, Ready to Transport","AttemptToTransport"],
			["Cut, Vehicle Transport","VehicleTransport"]
		]
	},
	PattaTT:
	{
		NatureOfOffence:
		[
			["Illegal Possession of Royaltie","RoyaltiesPossession"],
			["Selling, Purchasing of Royalties wood","RoyaltiesPossession"]
		]
	},
        TRCore:{
		NatureOfOffence:
		[
			["Offence in TR Core Area","TRCoreAreaOffence"]
		]
	},
	TRBuffer:{
		NatureOfOffence:
		[
			["Trespass, Cut, Ready to Transport","AttemptToTransport"],
			["Trespass, Cut, Vehicle Transport","VehicleTransport"]
		]
	},
	NP:{
		NatureOfOffence:[
			["Trespass, Cut, Ready to Transport","AttemptToTransport"],
			["Trespass, Cut, Vehicle Transport","VehicleTransport"]
		]
	},
	Sanctuary:{
		NatureOfOffence:[
			["Trespass, Cut, Ready to Transport","AttemptToTransport"],
			["Trespass, Cut, Vehicle Transport","VehicleTransport"]
		]
	},
	Teak:{
		NatureOfOffence:
		[
			["Possession Greater than 0.5Cub.M","PossessionGreaterThanHalfCM"],
			["Cutting which inturn disturbed WL habitat","DisturbWLLifecycle"]
		]
             },
	RoseWood:{
		NatureOfOffence:
		[
			["Cutting, Vehicle Transport, Possession","Possession"],
			["Cutting which inturn disturbed WL habitat","DisturbWLLifecycle"]
		]
	},
	Sandal:{
		NatureOfOffence:
		[
			["Possession Less than 5 KG","PossessionLessThanFiveKG"],
			["Possession Greater than 5 KG","PossessionGreaterThanFiveKG"],
			["Cutting which inturn disturbed WL habitat","DisturbWLLifecycle"]
		]
        },
        RedSandal:{
		NatureOfOffence:
		[
			["Possession Less than 5 KG","PossessionLessThanFiveKG"],
			["Possession Greater than 5 KG","PossessionGreaterThanFiveKG"],
			["Cutting which inturn disturbed WL habitat","DisturbWLLifecycle"]
		]
	},
        BlackWood:{
		NatureOfOffence:
		[
			["Possession Greater than 0.5Cub.M","PossessionGreaterThanHalfCM"],
			["Cutting which inturn disturbed WL habitat","DisturbWLLifecycle"]
		]
	},
	ExemptedSpecies:{
		NatureOfOffence:
		[
			["Cut, Transport, Possession","Possession"],
			["Cutting which inturn disturbed WL habitat","DisturbWLLifecycle"]
		]
	},
        NonExemptedSpecies:{
		NatureOfOffence:
		[
			["Cut, Transport, Possession","Possession"],
			["Cutting which inturn disturbed WL habitat","DisturbWLLifecycle"]
                ]
	},
	AnyLocation:{
		NatureOfOffence:
		[
			["Possession-Indian","Possession"],
			["Possession-NRI or Foreigner","PossessionNRIForeigner"],
			["Illegal Seeking IP rights","IllegalSeekingIP"],
			["Illegal Transfer of knowledge","IllegalTransferKnowledge"],
			["Breaking and disobey - Order","BreakingDisobeyOrder"]
		]
	},
        ExemptedBDSpecies: {
		NatureOfOffence:[
			["Possession-Indian","Possession"],
			["Possession-NRI or Foreigner","PossessionNRIForeigner"],
			["Illegal Seeking IP rights","IllegalSeekingIP"],
			["Illegal Transfer of knowledge","IllegalTransferKnowledge"],
			["Breaking and disobey - Order","BreakingDisobeyOrder"]
		],
	},
	NonExemptedBDSpecies: {
		NatureOfOffence:
		[
			["Possession-Indian","Possession"],
			["Possession-NRI or Foreigner","PossessionNRIForeigner"],
			["Illegal Seeking IP rights","IllegalSeekingIP"],
			["Illegal Transfer of knowledge","IllegalTransferKnowledge"],
			["Breaking and disobey - Order","BreakingDisobeyOrder"]
		]
	}
}

function LoadNatureOfOffenceDropDown(key1,key2){
	//console.println("Load Nature of offence:Key1"+key1+": Key2:"+key2)
	//Populate combo and list box fields with values from the Forest location type Data Object
	var NatureOfOffence = []
	if (key1 !="" && key1 !="Select") {
		if (dropdownFillData[key1] != undefined)
			NatureOfOffence = dropdownFillData[key1].NatureOfOffence
	}

	if (key2 !="" && key2 !="Select"){
		if (dropdownFillData[key2] != undefined) {
			this.getField("lbNatureOfOffence").setItems(NatureOfOffence.concat(dropdownFillData[key2].NatureOfOffence))
			return
		}
	}

	//console.println("Load Nature of offence:Length:"+NatureOfOffence.length)
	if (NatureOfOffence.length > 0)
		this.getField("lbNatureOfOffence").setItems(NatureOfOffence)
	else
		this.getField("lbNatureOfOffence").clearItems()
}


function LoadLocationDropDown(key) {
	// Populate fields with values from the Forest location type Data Object
	if (key !="" && key !="Select")
		this.getField("cbOffenceLocation").setItems(dropdownFillData[key].Location)
}

function LoadSeizureFPDropDown(key) {
	// Populate fields with values from the Seizure Data Object
	var seizure = dropdownFillData[key].Seizure
	this.getField("cbForestProduces.0").setItems(seizure)
	this.getField("cbForestProduces.1").setItems(seizure)
	this.getField("cbForestProduces.2").setItems(seizure)
}

function SetDefaultSeizureFPMeasurement(cOffenceType,cFP){
   if (cOffenceType=="WL") {
		this.getField("cbQuantity.0").currentValueIndices = 3
		this.getField("cbQuantity.1").currentValueIndices = 3
		this.getField("cbQuantity.2").currentValueIndices = 3
   } else if (cOffenceType=="BD" || cFP == "Sandal") {
		this.getField("cbQuantity.0").currentValueIndices = 2
		this.getField("cbQuantity.1").currentValueIndices = 2
		this.getField("cbQuantity.2").currentValueIndices = 2
   } else{
		this.getField("cbQuantity.0").currentValueIndices = 1
		this.getField("cbQuantity.1").currentValueIndices = 1
		this.getField("cbQuantity.2").currentValueIndices = 1
   }
}

function LoadForestProduceDropDown(key){
	//Populate Forest Produce drop ddown
	if (key !="" && key !="Select")
		this.getField("cbForestProduce").setItems(dropdownFillData[key].ForestProduce)
}

function LoadReports(key){
	//Populate Reports drop ddown
	if (key !="" && key !="Select")
		this.getField("cbReportGeneration").setItems(dropdownFillData[key].Reports)
}
