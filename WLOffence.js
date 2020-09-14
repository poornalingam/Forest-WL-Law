var wlOffenceSections = {
	COMMON : {
		Definition:"1,12B,14,15,17,20,24A,25B,36,37,",
		Main : "39,50,51(1),52,55,56,57,"
	},
	ForestOffence: {
		TN:"2)TNF Act 1882 21(d)(h)(i),21(2),41,51,54,55,56, \nNote: Add these sections and Penalty if the WL offence happened in RF."
	},
	TRCore:{
		Definition: "24A,",
		Main : "27(2)(3)(4),31,38-O,38V(1)(2)(3)(4(i)),51(1C)(1D),"
	},
	TRBuffer:{
		Definition: "",
		Main : "27(2)(3)(4),31,38-O,38V(4)(ii),"
	},
	NP : {
		Definition : "21,",
		Main : "27,28,31,34,35,35(6),35(8),38,54,54(4),"
	},
	Sanctuary : { 
		Definition : "26,",
		Main : "26A,27,28,29,31,38,54,54(4),"
	},
	ConAndComReserve : {
		Definition :"26,",
		Main : "36A,36C,54,"
	},
	NonProtectedArea : {
		Definition : "",
		Main : "54,"
	},
	SpecifiedPlant : {
		Definition : "27,",
		Main : "17H,"
	},
	ScheduledAnimal : {
		Definition : "",
		Main : "Include Hunting or Possession or Trading sections and add Sec (49A);(49B);(49C) incase of schedule animal Tranding,"
	},
	Hunting : {
		Definition : "16,35,",
		Main : "9,27,28,30,32,"
	},
	AlterationOfBoundary : {
		Definition : "",
		Main : "27(3),27,28,30,32,"
	},
	Transporting : {
		Definition : "5,33,",
		Main : "43,48A,"
	},
	Possession : {
		Definition : "5,",
		Main : "40,42,44,49,"
	},
	Trading : {
		Definition : "2,5,11,18,19,23,30,31,32,33,", 
		Main : "9,40,42,44,44(1)(a),44(1)(c),47,48,49,43,48A,"
	},
	MeatServing : {
		Definition : "5,",
		Main : "44(1)(b),49,49B(1)(b),"
	},
	Encroachment : {
		Definition : "",
		Main : "34A,27,28,30,32,"
	},
	NotInformingWLDeath : {
		Definition : "",
		Main : "27(2),"
	},
	LitterTheGround : {
		Definition : "",
		Main : "27(4),"
	},
	DivertWater : {
		Definition : "",
		Main : "29,"
	},
	Fire : {
		Definition : "",
		Main : "30,"
	},
	EntryWithWeapon : {
		Definition : "",
		Main : "31,"
	},
	InjuriousSubstances : {
		Definition : "",
		Main : "32,"
	},  
	TrespassAndHalting : {
		Definition : "",
		Main : "27,28,"
	},
	ImmurnationOfLifeStock : {
		Definition : "",
		Main : "33A,"
	},
	NonRegistrationOfArms : {
		Definition : "",
		Main : "34,"
	},
	HuntingTRBuffer : {
		Definition : "",
		Main : "51(1)(c)(d),",
		NotApplicable: "false"
	},
	HuntingSpecifiedPlant : {
		Definition : "",
		Main : "17(A),",
		NotApplicable: "false"
	},
	PossessionSpecifiedPlant : {
		Definition : "",
		Main : "17(B)(C)(F),",
		NotApplicable: "false"
	},
	TradingSpecifiedPlant : {
		Definition : "",
		Main : "17(D)(E)(F)(G),",
		NotApplicable: "false"
	},
	ScheduledAnimalSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	LitterTheGroundNonProtectedArea : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	LitterTheGroundSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	DivertWaterConAndComReserve : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	DivertWaterNonProtectedArea : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	DivertWaterSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	EntryWithWeaponConAndComReserve : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	EntryWithWeaponNonProtectedArea : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	EntryWithWeaponSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	InjuriousSubstancesConAndComReserve : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	InjuriousSubstancesNonProtectedArea : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	InjuriousSubstancesSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	ImmurnationOfLifeStockConAndComReserve : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	ImmurnationOfLifeStockNonProtectedArea : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	ImmurnationOfLifeStockSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	TrespassAndHaltingSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	TrespassAndHaltingNonProtectedArea : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	TrespassAndHaltingConAndComReserve : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	RegistrationOfArmsSpecifiedPlant : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	RegistrationOfArmsNonProtectedArea : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	},
	RegistrationOfArmsConAndComReserve : {
		Definition : "",
		Main : "",
		NotApplicable: "true"
	}
}

var wlOffencePenalty = {
	COMMON:{
		Penalty:"51(1)",
		ImprisonmentAndFine: "May be 3 Years or May be RS 25,000 or both.\n"
	},
	TRCore:{
		Penalty:"51(1C)(1D)",
		ImprisonmentAndFine: "First Offence:Shall be 3 Years, May be 7 Years and ₹ 50,000 may be 2Lakhs.\n\nSecond Offence onwards: Shall be 7 Years and ₹ 5 Lakhs, May be ₹ 50 Lakhs"
	},
	ScheduledAnimal:{
		Penalty:"51(1)",
		ImprisonmentAndFine: "First Offence:Shall be 3 Years, May be 7 Years and ₹ 10,000.\n\nSecond Offence: Shall be 3 Years, May be 7 Years and ₹ 25,000"
	},
	Hunting : {
		Penalty:"51(1)",
		ImprisonmentAndFine: "First Offence:Shall be 3 Years, May be 7 Years and ₹ 10,000.\n\nSecond Offence: Shall be 3 Years, May be 7 Years and ₹ 25,000"
	},
	AlterationOfBoundary :{
		Penalty:"51(1)",
		ImprisonmentAndFine: "First Offence:Shall be 3 Years, May be 7 Years and ₹ 10,000.\n\nSecond Offence: Shall be 3 Years, May be 7 Years and ₹ 25,000"
	},
	HuntingTRBuffer:{
		Penalty:"51(1C)(1D)",
		ImprisonmentAndFine: "First Offence:Shall be 3 Years, May be 7 Years and ₹ 50,000 may be 2Lakhs.\n\nSecond Offence onwards: Shall be 7 Years and ₹ 5 Lakhs, May be ₹ 50 Lakhs"
	},
	ForestOffence: {
		Penalty:"2)TNF Act 1882 21(i),55",
		ImprisonmentAndFine: ["\n2) In addition to fine, actual damage of forest to be collected as per Sec 8(6) of Chapter IV in Range Admin Manual.","\n3) Open fine."]
	},
	NonCompoundable:[",TRCore,ScheduledAnimal,HuntingTRBuffer,HuntingNP,HuntingSanctuary,AlterationOfBoundaryTRBuffer,AlterationOfBoundaryNP,AlterationOfBoundarySanctuary,TransportingTRBuffer,TransportingNP,TransportingSanctuary,PossessionTRBuffer,TradingTRBuffer,MeatServingTRBuffer,EncroachmentTRBuffer,PossessionNP,TradingNP,MeatServingNP,EncroachmentNP,PossessionSanctuary,TradingSanctuary,MeatServingSanctuary,EncroachmentSanctuary"]
}