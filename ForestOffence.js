// Ensure end of the line of each law end with comma for join function to work proper. Its mandatory for split and sorting.
//
var forestOffenceSections = {
  Common: {
		"DisturbWLLifecycle":[
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),29,50,51(1),52,54,55,56,"
		],
		"PenaltyObjectName":{"Common":["WLCOMMON"]}
	},
	TRCore :{
		"DisturbWLLifecycle":[
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PenaltyObjectName": {"TRCore":["TRCore"]}
	},
	TRBuffer :{
		"DisturbWLLifecycle":[
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(4)(ii),38V,50,51(1),52,54,55,56,57,"
		],
		"PenaltyObjectName":{"TRBuffer":["WLCOMMON"]}
	},
	NP : {
		"DisturbWLLifecycle":[
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(21)(24A)(25B)(37),27(2)(3)(4),29,31,32,35,35(6),50,51(1),52,54,55,56,57,"
		],
		"PenaltyObjectName":{"NP":["WLCOMMON"]}
	},
	Sanctuary:{
		"DisturbWLLifecycle":[
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(24A)(25B)(26),26A,27,29,31,32,50,51(1),52,54,55,56,57,"
		],
		"PenaltyObjectName":{"Sanctuary":["WLCOMMON"]}
	},
	TeakRF: {
		"AttemptToTransport": [ "0)TN.F.Act 1882 Sec.$21(d)(e)(f),41,51,49A,49B,49G,56,"],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
		"PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,49A,49B,49G,51,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,Note:\n Unlicensed industry needs to be booked under Sec 3 also,"
		],
		"PossessionLessThanFiveKG":["Use Trespass, Cutting, Vehicle Transport offence Section"],
		"PossessionGreaterThanFiveKG":["Use Trespass, Cutting, Vehicle Transport offence Section"],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)"],
			"VehicleTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionGreaterThanHalfCM":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
  },
  TeakRL: {
		"AttemptToTransport": [
			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),41,51,49A,49B,49G,56,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,41,51,49A,49B,49G,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
		"PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,Note:\n Unlicensed ind. Needs to be booked under Sec 3 also,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
		"PossessionLessThanFiveKG":["Use Trespass, Cutting, Vehicle Transport offence Section"],
		"PossessionGreaterThanFiveKG":["Use Trespass, Cutting, Vehicle Transport offence Section"],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec28A","GenRules"],
			"VehicleTransport":["TNF1882Sec28A","TNF1882Sec35B","TNTMCO1982","GenRules"],
			"PossessionGreaterThanHalfCM":["TNF1882Sec28A","TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010"]
		}
  },
  TeakURL: {
		"AttemptToTransport": [
			"0)TN.F.Act 1882 Sec.$26,41,51,49A,49B,49G,56,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$26,35,36,41,51,49A,49B,49G,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,"
		],
		"PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$26,35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,"
		],
		"PossessionLessThanFiveKG":["Use Trespass, Cutting, Vehicle Transport offence Section"],
		"PossessionGreaterThanFiveKG":["Use Trespass, Cutting, Vehicle Transport offence Section"],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec35B","GenRules"],
			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982","GenRules"],
			"PossessionGreaterThanHalfCM":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010"]
		}
  },
  TeakPattaOther: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,3A,4,"
		],
	  "PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,3A,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PossessionLessThanFiveKG":["Use Cutting, Vehicle Transport offence Section"],
		"PossessionGreaterThanFiveKG":["Use Cutting, Vehicle Transport offence Section"],
		"PenaltyObjectName":{
      "AttemptToTransport":["NA"],
			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982"],
			"PossessionGreaterThanHalfCM":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
  },
  TeakPattaPP: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"6)TN.Preservation of Private Forest Act 1949 Sec.$1,2,6,6A,7,",
			"7)TN.Preservation of Private Forest Rules 1946 Sec.$4,"
		],
		"PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,Note:\n Unlicensed ind. Needs to be booked under Sec 3 also,",
			"6)TN.Preservation of Private Forest Act 1949 Sec.$1,2,6,6A,7,",
			"7)TN.Preservation of Private Forest Rules 1946 Sec.$4,"
		],
		"PossessionLessThanFiveKG":["Use Cutting, Vehicle Transport offence Section"],
		"PossessionGreaterThanFiveKG":["Use Cutting, Vehicle Transport offence Section"],
		"PenaltyObjectName":{
      "AttemptToTransport":["NA"],
			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982","TNPPF1949"],
			"PossessionGreaterThanHalfCM":["TNF1882Sec35B","TNTMCO1982","TNPPF1949","TNRWBI2010"]
		}
        },
  TeakPattaHP: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"6)TN.Hill Preservation of Trees Act 1955 Sec.$2,3,5,7,11,",
		],
		"PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,Note:\n Unlicensed ind. Needs to be booked under Sec 3 also,",
			"6)TN.Hill Preservation of Trees Act 1955 Sec.$2,3,5,7,11,",
		],
		"PossessionLessThanFiveKG":["Use Cutting, Vehicle Transport offence Section"],
		"PossessionGreaterThanFiveKG":["Use Cutting, Vehicle Transport offence Section"],
		"PenaltyObjectName":{
      "AttemptToTransport":["NA"],
			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982","TNHP1955"],
			"PossessionGreaterThanHalfCM":["TNF1882Sec35B","TNTMCO1982","TNHP1955","TNRWBI2010"]
		}
        },
  TeakPattaTT: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
		"RoyaltiesPossession":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PossessionLessThanFiveKG":["Use Cutting, Vehicle Transport & Possession"],
		"PossessionGreaterThanFiveKG":["Use Cutting, Vehicle Transport & Possession"],
		"PenaltyObjectName":{
      "AttemptToTransport":["NA"],
      "VehicleTransport":["NA"],
			"RoyaltiesPossession":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"],
			"PossessionGreaterThanHalfCM":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
        },
	TeakTRCore:{
		"TRCoreAreaOffence": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PossessionGreaterThanHalfCM":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,49A,49B,49G,51,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,Note:\n Unlicensed industry needs to be booked under Sec 3 also,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PenaltyObjectName": {
			"TRCoreAreaOffence":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionGreaterThanHalfCM":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
	},
	RoseWoodRF: {
		"AttemptToTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),41,51,49A,49B,49G,56,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(i),",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
		"Possession":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(i),7,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNRW1994"],
			"VehicleTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRW1994"],
			"Possession":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRW1994","TNRWBI2010"]
		}
        },
  RoseWoodRL: {
  	"AttemptToTransport": [
  			"0)TN.F.Act 1882 Sec.$26(c)(d)(g)41,51,49A,49B,49G,56,",
  			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,",
  			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
  		],
  	"VehicleTransport":[
  			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
  			"2)T.T.Rules 1968 Sec.$2,3(i),",
  			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
  		],
  	"Possession":[
  			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
  			"2)T.T.Rules 1968 Sec.$2,3(i),7,",
  			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
  			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
  		],
  	"PenaltyObjectName":{
  			"AttemptToTransport":["TNF1882Sec28A","GenRules","TNRW1994"],
  			"VehicleTransport":["TNF1882Sec28A","TNF1882Sec35B","TNTMCO1982","GenRules","TNRW1994"],
  			"Possession":["TNF1882Sec28A","TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010","TNRW1994"]
  		}
    },
  RoseWoodURL: {
		"AttemptToTransport": [
			"0)TN.F.Act 1882 Sec.26,41,51,49A,49B,49G,56,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$26,35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(i),",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,"
		],
		"Possession":[
			"0)TN.F.Act 1882 Sec.$26,35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(i),7,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"5)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec35B","GenRules","TNRW1994"],
			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRW1994"],
			"Possession":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010","TNRW1994"]
		}
        },
  RoseWoodPattaOther: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	  "Possession":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(ii),7,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,\n Note: Unlicensed ind. Needs to be booked under Sec 3 also,"
  	],
  	"PenaltyObjectName":{
  			"AttemptToTransport":["NA"],
  			"VehicleTransport":["NA"],
  			"Possession":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010","TNRW1994"]
  	}
  },
  RoseWoodPattaPP: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	        "Possession":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(ii),7,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,\n Note: Unlicensed ind. Needs to be booked under Sec 3 also,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["NA"],
			"VehicleTransport":["NA"],
			"Possession":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010","TNRW1994"]
		}
  },
  RoseWoodPattaHP: {
  		"AttemptToTransport": ["Not Applicable,"],
  		"VehicleTransport": ["Not Applicable,"],
  	        "Possession":[
  			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
  			"2)T.T.Rules 1968 Sec.$2,3(ii),7,",
  			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,\n Note: Unlicensed ind. Needs to be booked under Sec 3 also,"
  		],
  		"PenaltyObjectName":{
  			"AttemptToTransport":["NA"],
  			"VehicleTransport":["NA"],
  			"Possession":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010","TNRW1994"]
  		}
    },
    RoseWoodPattaTT: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	  "RoyaltiesPossession":[
  			"0)TN.F.Act 1882 Sec.$26(h),35,36,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
  			"2)T.T.Rules 1968 Sec.$2,3(ii),4,5,7,",
  			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,\n Note: Unlicensed ind. Needs to be booked under Sec 3 also,"
		],
	  "Possession":[
  			"0)TN.F.Act 1882 Sec.$26(h),35,36,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
  			"2)T.T.Rules 1968 Sec.$2,3(ii),4,5,7,",
  			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,\n Note: Unlicensed ind. Needs to be booked under Sec 3 also,"
		],
		"PenaltyObjectName":{
  			"AttemptToTransport":["NA"],
  			"VehicleTransport":["NA"],
  			"RoyaltiesPossession":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010","TNRW1994"],
  			"Possession":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010","TNRW1994"]
		}
  },
	RoseWoodTRCore:{
		"TRCoreAreaOffence": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(i),",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"Possession":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)TN.R.W Trees (c) Act 1994 Sec.$2,3,4,6,8,10,",
			"2)T.T.Rules 1968 Sec.$2,3(i),7,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PenaltyObjectName": {
			"TRCoreAreaOffence":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRW1994"],
			"Possession":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRWBI2010","TNRW1994"]
		}
	},
	SandalRF: {
		"AttemptToTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),36A,36B,36C,41,51,49A,49B,49G,56,"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,",
			"4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
 		"PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
		],
		"PossessionGreaterThanFiveKG": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
			"6)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNF1882Sec36E"],
			"VehicleTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982"],
			"PossessionLessThanFiveKG":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982"],
			"PossessionGreaterThanFiveKG":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","TNRWBI2010"]
		  }
    },
  SandalRL: {
  		"AttemptToTransport": [
  			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),36A,36B,36C,41,51,49A,49B,49G,56,",
  			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
  		],
  		"VehicleTransport":[
  			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),",
  			"2)T.T.Rules 1968 Sec.$2,3(i),",
  			"3)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,",
  			"4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
  		],
   		"PossessionLessThanFiveKG":[
  			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),",
  			"2)T.T.Rules 1968 Sec.$2,3(i),",
  			"3)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
  			"4)TN.S.W.Possession Rules 1970 Sec.$2,3,",
  			"5)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"6)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
  		],
  		"PossessionGreaterThanFiveKG": [
  			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),",
  			"2)T.T.Rules 1968 Sec.$2,3(i),7,",
  			"3)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
  			"4)TN.S.W.Possession Rules 1970 Sec.$2,3,",
  			"5)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"6)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
  			"7)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
  		],
  		"PenaltyObjectName":{
  			"AttemptToTransport":["TNF1882Sec28A","TNF1882Sec36E","GenRules"],
  			"VehicleTransport":["TNF1882Sec28A","TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","GenRules"],
  			"PossessionLessThanFiveKG":["TNF1882Sec28A","TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","GenRules"],
  			"PossessionGreaterThanFiveKG":["TNF1882Sec28A","TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","GenRules","TNRWBI2010"]
  		}
  },
  SandalURL: {
    "AttemptToTransport": [
    	"0)TN.F.Act 1882 Sec.$26,36A,36B,36C,41,51,49A,49B,49G,56,",
    	"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,"
    ],
    "VehicleTransport":[
    	"0)TN.F.Act 1882 Sec.$26,35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
    	"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
    	"2)T.T.Rules 1968 Sec.$2,3(i),",
    	"3)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,",
    	"5)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
    ],
    	"PossessionLessThanFiveKG":[
    	"0)TN.F.Act 1882 Sec.$26,35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
    	"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
    	"2)T.T.Rules 1968 Sec.$2,3(i),",
    	"3)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
    	"4)TN.S.W.Possession Rules 1970 Sec.$2,3,",
    	"5)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
    	"6)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
    ],
    "PossessionGreaterThanFiveKG": [
    	"0)TN.F.Act 1882 Sec.$26,35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
    	"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
    	"2)T.T.Rules 1968 Sec.$2,3(i),7,",
    	"3)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
    	"4)TN.S.W.Possession Rules 1970 Sec.$2,3,",
    	"5)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
    	"6)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
    	"7)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
    ],
    "PenaltyObjectName":{
    	"AttemptToTransport":["TNF1882Sec35B","TNF1882Sec36E","GenRules"],
    	"VehicleTransport":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","GenRules"],
    	"PossessionLessThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","GenRules"],
    	"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","GenRules","TNRWBI2010"]
    }
  },
  SandalPattaOther: {
	"AttemptToTransport": ["Not Applicable,"],
	"VehicleTransport": ["Not Applicable,"],
  "PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$35,36,36A,36B,36C,36F,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
	],
  "PossessionGreaterThanFiveKG":[
		"0)TN.F.Act 1882 Sec.$35,36,36A,36B,36C,36F,41,51,49A,49B,49G,56,56B,56C,56D,",
		"1)T.T.Rules 1968 Sec.$2,3(ii),7,",
		"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
		"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
		"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
		"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
		"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
		"7)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
	],
	"PenaltyObjectName":{
		"AttemptToTransport":["NA"],
		"VehicleTransport":["NA"],
		"PossessionLessThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982"],
		"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","TNRWBI2010"]
	}
      },
  SandalPattaPP: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	  "PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$35,36,36A,36B,36C,36F,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
	  "PossessionGreaterThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$35,36,36A,36B,36C,36F,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),7,",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"7)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["NA"],
			"VehicleTransport":["NA"],
			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982"],
			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","TNRWBI2010"]
		}
  },
  SandalPattaHP: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	  "PossessionLessThanFiveKG":[
  			"0)TN.F.Act 1882 Sec.$35,36,36A,36B,36C,36F,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)T.T.Rules 1968 Sec.$2,3(ii),",
  			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
  			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
  			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
  			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
  			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
	  "PossessionGreaterThanFiveKG":[
  			"0)TN.F.Act 1882 Sec.$35,36,36A,36B,36C,36F,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)T.T.Rules 1968 Sec.$2,3(ii),7,",
  			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
  			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
  			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
  			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
  			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"7)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
  			"AttemptToTransport":["NA"],
  			"VehicleTransport":["NA"],
  			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982"],
  			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","TNRWBI2010"]
		}
  },
  SandalPattaTT: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	  "RoyaltiesPossession":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,36A,36B,36C,36F,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
	  "PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,36A,36B,36C,36F,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
	  "PossessionGreaterThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,36A,36B,36C,36F,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,7,",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
			"5)TN.S.W.Trees on Patta Land Rules 2008 Sec.$2,3,5(3),",
			"6)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"7)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["NA"],
			"VehicleTransport":["NA"],
			"RoyaltiesPossession":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982"],
			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982"],
			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNF1882Sec36E","TNTMCO1982","TNRWBI2010"]
		}
  },
	SandalTRCore:{
		"TRCoreAreaOffence": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,",
			"4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
 		"PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PossessionGreaterThanFiveKG": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,36A,36B,36C,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.S.W.Transit Rules 1967 Sec.$2,3,4,6,7,9,",
			"3)TN.S.W.Possession Rules 1970 Sec.$2,3,",
			"4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
			"6)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PenaltyObjectName": {
			"TRCoreAreaOffence":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionLessThanFiveKG":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionGreaterThanFiveKG":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
	},
	RedSandalRF: {
		"AttemptToTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),41,51,49A,49B,49G,56,"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
 		"PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
		],
		"PossessionGreaterThanFiveKG": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)"],
			"VehicleTransport":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionLessThanFiveKG":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionGreaterThanFiveKG":["TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
        },
  RedSandalRL: {
        		"AttemptToTransport": [
        			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),41,51,49A,49B,49G,56,",
        			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
        		],
        		"VehicleTransport":[
        			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,41,49A,49B,49G,56,56B,56C,56D,",
        			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),",
        			"2)T.T.Rules 1968 Sec.$2,3(i),9,",
        			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
        		],
         		"PossessionLessThanFiveKG":[
        			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
        			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),",
        			"2)T.T.Rules 1968 Sec.$2,3(i),9,",
        			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
        			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
        			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
        		],
        		"PossessionGreaterThanFiveKG": [
        			"0)TN.F.Act 1882 Sec.$26(c)(d)(g),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
        			"1)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),",
        			"2)T.T.Rules 1968 Sec.$2,3(i),7,9,",
        			"3)TN. Timber (Movement Control) Order 1982 Sec.$2,3,4,",
        			"4)TN. Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
        			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,"
        		],
        		"PenaltyObjectName":{
        			"AttemptToTransport":["TNF1882Sec28A","GenRules"],
        			"VehicleTransport":["TNF1882Sec28A","TNF1882Sec35B","TNTMCO1982","GenRules"],
        			"PossessionLessThanFiveKG":["TNF1882Sec28A","TNF1882Sec35B","TNTMCO1982","GenRules"],
        			"PossessionGreaterThanFiveKG":["TNF1882Sec28A","TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010"]
        		}
        },
  RedSandalURL: {
		"AttemptToTransport": [
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,41,51,49A,49B,49G,56,"
		],
		"VehicleTransport":[
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"2)T.T.Rules 1968 Sec.$2,3(i),9,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
 		"PossessionLessThanFiveKG":[
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"2)T.T.Rules 1968 Sec.$2,3(i),9,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
		],
		"PossessionGreaterThanFiveKG": [
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"2)T.T.Rules 1968 Sec.$2,3(i),7,9,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec35B","GenRules"],
			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982","GenRules"],
			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010"],
			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNTMCO1982","GenRules","TNRWBI2010"]
		}
        },
  RedSandalPattaOther: {
  		"AttemptToTransport": ["Not Applicable,"],
  		"VehicleTransport": [
  			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
  			"1)T.T.Rules 1968 Sec.$2,3(ii),9,",
  			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
  			"3)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3A,4,"
  		],
  	  "PossessionLessThanFiveKG":[
    			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
    			"1)T.T.Rules 1968 Sec.$2,3(ii),9,",
    			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
    			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
    			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3A,4,"
  		],
  	  "PossessionGreaterThanFiveKG":[
    			"0)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
    			"1)T.T.Rules 1968 Sec.$2,3(ii),7,9,",
    			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
    			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
    			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3A,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,"
  		],
  		"PenaltyObjectName":{
  			"AttemptToTransport":["NA"],
  			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982"],
  			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"],
  			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
  		}
  },
  RedSandalPattaPP: {
  		"AttemptToTransport": ["Not Applicable,"],
  		"VehicleTransport": [
        "0)TN.Preservation of Private Forest Act 1949 Sec.$1,2,6,6A,7,",
        "1)TN.Preservation of Private Forest Rules 1946 Sec.$4,",
        "2)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
        "3)T.T.Rules 1968 Sec.$2,3(ii),9,",
        "4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
        "5)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
  		],
  	  "PossessionLessThanFiveKG":[
          "0)TN.Preservation of Private Forest Act 1949 Sec.$1,2,6,6A,7,",
          "1)TN.Preservation of Private Forest Rules 1946 Sec.$4,",
          "2)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
          "3)T.T.Rules 1968 Sec.$2,3(ii),9,",
          "4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
          "5)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
          "6)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
  		],
  	  "PossessionGreaterThanFiveKG":[
          "0)TN.Preservation of Private Forest Act 1949 Sec.$1,2,6,6A,7,",
          "1)TN.Preservation of Private Forest Rules 1946 Sec.$4,",
          "2)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
          "3)T.T.Rules 1968 Sec.$2,3(ii),7,9,",
          "4)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
          "5)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
          "6)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,"
  		],
  		"PenaltyObjectName":{
  			"AttemptToTransport":["NA"],
  			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982"],
  			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNPPF1949"],
  			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010","TNPPF1949"],
  		}
  },
  RedSandalPattaHP: {
  		"AttemptToTransport": ["Not Applicable,"],
  		"VehicleTransport": [
    			"0)TN.Hill Preservation of Trees Act 1955 Sec.$2,3,5,7,11,",
    			"1)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
    			"2)T.T.Rules 1968 Sec.$2,3(ii),9,",
    			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
    			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,"
  		],
  	  "PossessionLessThanFiveKG":[
    			"0)TN.Hill Preservation of Trees Act 1955 Sec.$2,3,5,7,11,",
    			"1)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
    			"2)T.T.Rules 1968 Sec.$2,3(ii),9,",
    			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
    			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
    			"5)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
  		],
      "PossessionGreaterThanFiveKG":[
    			"0)TN.Hill Preservation of Trees Act 1955 Sec.$2,3,5,7,11,",
    			"1)TN.F.Act 1882 Sec.$35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
    			"2)T.T.Rules 1968 Sec.$2,3(ii),7,9,",
    			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
    			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
    			"5)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
  		],
  		"PenaltyObjectName":{
    			"AttemptToTransport":["NA"],
    			"VehicleTransport":["TNF1882Sec35B","TNTMCO1982","TNHP1955"],
    			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNHP1955"],
    			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010","TNHP1955"]
  		}
    },
  RedSandalPattaTT: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	  "RoyaltiesPossession":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,7,9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,"
		],
	  "PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3A,4,"
		],
	  "PossessionGreaterThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$26(h),35,36,40G,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),4,5,7,9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,3A,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,"
		],
		"PenaltyObjectName":{
      "AttemptToTransport":["NA"],
      "VehicleTransport":["NA"],
			"RoyaltiesPossession":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"],
			"PossessionLessThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"],
			"PossessionGreaterThanFiveKG":["TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
  },
	RedSandalTRCore:{
		"TRCoreAreaOffence": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
 		"PossessionLessThanFiveKG":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PossessionGreaterThanFiveKG": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,49A,49B,49G,56,56B,56C,56D,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,9,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)TN.M. a/c. S.T. for Indu. or Comm. Rules 1988 Sec.$2,4,Note:\n Add Sec. 3 – if exceed 0.50 c.mtr,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PenaltyObjectName": {
			"TRCoreAreaOffence":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionLessThanFiveKG":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982"],
			"PossessionGreaterThanFiveKG":["TRCore","TNF1882Sec21(1)","TNF1882Sec21(i)","TNF1882Sec35B","TNTMCO1982","TNRWBI2010"]
		}
	},
	ExemptedSpeciesRF: {
		"AttemptToTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),41,51,56,"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
 		"Possession":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec21(2)"],
			"VehicleTransport":["TNF1882Sec21(2)","TNTMCO1982"],
			"Possession":["TNF1882Sec21(2)","TNTMCO1982","TNRWBI2010"]
		}
  },
  ExemptedSpeciesRL: {
		"AttemptToTransport": [
			"0)TN.F.Act 1882 Sec.$26(c),41,51,56,",
			"4)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"

		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$26(c),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
 		"Possession":[
			"0)TN.F.Act 1882 Sec.$26(c) 35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec28A(2)"],
			"VehicleTransport":["TNF1882Sec28A(2)","TNTMCO1982"],
			"Possession":["TNF1882Sec28A(2)","TNTMCO1982","TNRWBI2010"]
		}
  },
  ExemptedSpeciesURL: {
		"AttemptToTransport": [
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,41,51,56,"
		],
		"VehicleTransport":[
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,35,36,41,51,56,",
			"2)T.T.Rules 1968 Sec.$2,3(i),",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
 		"Possession":[
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,35,36,41,51,56,",
			"2)T.T.Rules 1968 Sec.$2,3(i),7,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec28A(2)","GenRules"],
			"VehicleTransport":["TNF1882Sec28A(2)","TNTMCO1982","GenRules"],
			"Possession":["TNF1882Sec28A(2)","TNTMCO1982","TNRWBI2010","GenRules"]
		}
  },
  ExemptedSpeciesPattaOther: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": ["Not Applicable,"],
	  "Possession":["Not Applicable,"],
		"PenaltyObjectName":{
			"AttemptToTransport":["NA"],
			"VehicleTransport":["NA"],
			"Possession":["NA"]
		}
  },
	ExemptedSpeciesTRCore:{
		"TRCoreAreaOffence": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),41,51,56,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
 		"Possession":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PenaltyObjectName":{
			"TRCoreAreaOffence":["TRCore","TNF1882Sec21(2)"],
			"Possession":["TRCore","TNF1882Sec21(2)","TNTMCO1982","TNRWBI2010"]
		}
	},
	NonExemptedSpeciesRF: {
		"AttemptToTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),41,51,56,"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
 		"Possession":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec21(2)"],
			"VehicleTransport":["TNF1882Sec21(2)","TNTMCO1982"],
			"Possession":["TNF1882Sec21(2)","TNTMCO1982","TNRWBI2010"]
		}
  },
  NonExemptedSpeciesRL: {
		"AttemptToTransport": [
			"0)TN.F.Act 1882 Sec.$26(c),41,51,56,",
			"4)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
		"VehicleTransport":[
			"0)TN.F.Act 1882 Sec.$26(c),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
 		"Possession":[
			"0)TN.F.Act 1882 Sec.$26(c) 35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),7,",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,",
			"4)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec28A(2)"],
			"VehicleTransport":["TNF1882Sec28A(2)","TNTMCO1982"],
			"Possession":["TNF1882Sec28A(2)","TNTMCO1982","TNRWBI2010"]
		}
        },
  NonExemptedSpeciesURL: {
		"AttemptToTransport": [
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,41,51,56,"
		],
		"VehicleTransport":[
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,35,36,41,51,56,",
			"2)T.T.Rules 1968 Sec.$2,3(i),",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
 		"Possession":[
			"0)General Rules for the Mgt of RL and URL (i.e) rules under sec.26 of TN.F.Act 1882 Sec.$1,2,3,9(a)(b),10,",
			"1)TN.F.Act 1882 Sec.$26,35,36,41,51,56,",
			"2)T.T.Rules 1968 Sec.$2,3(i),7,",
			"3)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"4)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["TNF1882Sec28A(2)","GenRules"],
			"VehicleTransport":["TNF1882Sec28A(2)","TNTMCO1982","GenRules"],
			"Possession":["TNF1882Sec28A(2)","TNTMCO1982","TNRWBI2010","GenRules"]
		}
        },
  NonExemptedSpeciesPattaOther: {
		"AttemptToTransport": ["Not Applicable,"],
		"VehicleTransport": [
			"0)TN.F.Act 1882 Sec.$35,36,41,51,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,"
		],
	        "Possession":[
			"0)TN.F.Act 1882 Sec.$35,36,41,51,",
			"1)T.T.Rules 1968 Sec.$2,3(ii),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"3)TN.Regulation of Wood Based Ind. Rules 2010 Sec.$2(h),7,8,13,"
		],
		"PenaltyObjectName":{
			"AttemptToTransport":["NA"],
			"VehicleTransport":["TNF1882Sec28A(2)","TNTMCO1982","TNRWBI2010"],
			"Possession":["TNF1882Sec28A(2)","TNTMCO1982","TNRWBI2010"]
		}
  },
	NonExemptedSpeciesTRCore:{
		"TRCoreAreaOffence": [
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),41,51,56,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
 		"Possession":[
			"0)TN.F.Act 1882 Sec.$21(d)(e)(f),35,36,41,51,56,",
			"1)T.T.Rules 1968 Sec.$2,3(i),",
			"2)TN.Timber (Movement Control) Order 1982 Sec.$2,3,4,",
			"8)WL(P) Act 1972 Sec.$2(12B)(15)(17)(24A)(25B)(37),27(2)(3)(4),29,31,32,35(6),38-O,38V(1)(2)(3)(4(i)),38V,50,51(1),51(1C)(1D),52,54,55,56,57,Note:\n A)Add 51(1D) for abets.\n B)For section 51(1C) Refer WL(P) Amendment Act 2006,"
		],
		"PenaltyObjectName":{
			"TRCoreAreaOffence":["TRCore","TNF1882Sec21(2)"],
			"Possession":["TRCore","TNF1882Sec21(2)","TNTMCO1982","TNRWBI2010"]
		}
	},
	NonExemptedBDSpeciesAnyLocation: {
		"PossessionNRIForeigner" : [
			"0)B.D.Act 2002 Sec.$2,3(1)(2),19(1),41(1)(3),55(1),58,59,61,",
			"1)B.D.Rules 2004 Sec.$2,14,16,17,18,19,20,",
			"2)TN.B.D. Rules 2017 Sec.$2,15,15(1),17,",
			"3)WL(P) Act 1972 Sec.$2,48(A),51(1),Note:\n a) Add Sec 17A to H only for Specified plant (Scheduled VI of WLA).\n B) Add Sec. 29 in case of offence within Sanctuary,",
			"4)Constitution of India Article 51A(g),"
		],
		"Possession": [
			"0)B.D.Act 2002 Sec.$2,7,19(1),24(1)(2),41(1)(3),55(2),58,59,61,",
			"1)B.D.Rules 2004 Sec.$2,14,16,17,18,19,20,",
			"2)TN.B.D. Rules 2017 Sec.$2,15,15(1),17,",
			"3)WL(P) Act 1972 Sec.$2,48(A),51(1),Note:\n a) Add Sec 17A to H only for Specified plant (Scheduled VI of WLA).\n B) Add Sec. 29 in case of offence within Sanctuary,",
			"4)Constitution of India Article 51A(g),"
		],
		"IllegalTransferKnowledge":[
			"0)B.D.Act 2002 Sec.$2,6,19(1)(2),41(1)(3),55(1),58,59,61,",
			"1)B.D.Rules 2004 Sec.$2,14,16,17,18,19,20,",
			"2)TN.B.D. Rules 2017 Sec.$2,15,15(1),17,",
			"3)WL(P) Act 1972 Sec.$2,48(A),51(1),Note:\n a) Add Sec 17A to H only for Specified plant (Scheduled VI of WLA).\n B) Add Sec. 29 in case of offence within Sanctuary,",
			"4)Constitution of India Article 51A(g),"
		],
		"IllegalSeekingIP" : [
			"0)B.D.Act 2002 Sec.$2,4,19(1),20(1)(2),41(1)(3),55(1),58,59,61,",
			"1)B.D.Rules 2004 Sec.$2,14,16,17,18,19,20,",
			"2)TN.B.D. Rules 2017 Sec.$2,15,15(1),17,",
			"3)WL(P) Act 1972 Sec.$2,48(A),51(1),Note:\n a) Add Sec 17A to H only for Specified plant (Scheduled VI of WLA).\n B) Add Sec. 29 in case of offence within Sanctuary,",
			"4)Constitution of India Article 51A(g),"
		],
		"BreakingDisobeyOrder": [
			"0)B.D.Act 2002 Sec.$2,19(1),41(1)(3),56,58,59,61,",
			"1)B.D.Rules 2004 Sec.$2,14,16,17,18,19,20,",
			"2)TN.B.D. Rules 2017 Sec.$2,15,15(1),17,",
			"3)WL(P) Act 1972 Sec.$2,48(A),51(1),Note:\n a) Add Sec 17A to H only for Specified plant (Scheduled VI of WLA).\n B) Add Sec. 29 in case of offence within Sanctuary,",
			"4)Constitution of India Article 51A(g),"
		],
		"PenaltyObjectName":{
			"PossessionNRIForeigner":["BD2002-55(1)","WLCOMMON"],
			"Possession":["BD2002-55(2)","WLCOMMON"],
			"IllegalTransferKnowledge":["BD2002-55(1)","WLCOMMON"],
			"IllegalSeekingIP":["BD2002-55(1)","WLCOMMON"],
			"BreakingDisobeyOrder":["BD2002-56","WLCOMMON"]
		}
	},
	ExemptedBDSpeciesAnyLocation: {
		"Possession" : ["Not Applicable,"],
		"PossessionNRIForeigner": ["Not Applicable,"],
		"IllegalTransferKnowledge":["Not Applicable,"],
		"IllegalSeekingIP" : ["Not Applicable,"],
		"BreakingDisobeyOrder": [
			"0)B.D.Act 2002 Sec.$2,19(1),41(1)(3),56,58,59,61,",
			"1)B.D.Rules 2004 Sec.$2,14,16,17,18,19,20,",
			"2)TN.B.D. Rules 2017 Sec.$2,15,15(1),17,",
			"3)WL(P) Act 1972 Sec.$2,48(A),51(1),Note:\n a) Add Sec 17A to H only for Specified plant (Scheduled VI of WLA).\n B) Add Sec. 29 in case of offence within Sanctuary,",
			"4)Constitution of India Article 51A(g),"
		],
		"PenaltyObjectName":{
			"Possession":["NA"],
			"PossessionNRIForeigner":["NA"],
			"IllegalSeekingIP":["NA"],
			"IllegalTransferKnowledge":["NA"],
			"BreakingDisobeyOrder":["BD2002-56","WLCOMMON"]
		}
	}
}

var forestOffencePenalty = {
  "NA":{
    "Penalty":["Not Applicable.","."],
    "ImprisonmentAndFine": ["Not Applicable"]
  },
	"TRCore":{
		"Penalty":["WL(P) Act 1972 Sec.","51(1C)(1D)"],
		"ImprisonmentAndFine": ["1)First Offence:Shall be 3 Years, May be 7 Years and ₹50000 may be 200000.\n\nSecond Offence onwards: Shall be 7 Years and ₹500000, May be ₹5000000"]
	},
	"TNF1882Sec28A":{
		"Penalty":["TNF Act 1882 Sec.","28A"],
		"ImprisonmentAndFine": ["2)May be 5 Years and may be ₹20000 fine.\n 1st Offence:Shall be 2 Years and ₹7500 fine.\n 2nd Offence: Shall be 3 Years and ₹15000 fine."]
	},
	"TNF1882Sec35B":{
		"Penalty":["TNF Act 1882 Sec.","35B"],
		"ImprisonmentAndFine": ["2)May be 5 Years and may be ₹20000 fine.\n 1st Offence:Shall be 2 Years and ₹7500 fine.\n 2nd Offence: Shall be 3 Years and ₹15000 fine."]
	},
	"TNF1882Sec36E":{
		"Penalty":["TNF Act 1882 Sec.","36E"],
		"ImprisonmentAndFine": ["2)May be 5 Years and may be ₹20000 fine.\n 1st Offence:Shall be 2 Years and ₹7500 fine.\n 2nd Offence: Shall be 3 Years and ₹15000 fine."]
	},
	"TNF1882Sec21(1)":{
		"Penalty":["TNF Act 1882 Sec.","21(1)"],
		"ImprisonmentAndFine": ["2)May be 5 Years and may be ₹20000 fine.\n 1st Offence:Shall be 2 Years and ₹7500 fine.\n 2nd Offence: Shall be 3 Years and ₹15000 fine."]
	},
	"TNF1882Sec21(i)":{
		"Penalty":["TNF Act 1882 Sec.","21(i)"],
		"ImprisonmentAndFine": ["3)In addition to fine, actual damage of forest to be collected as per 21(i) of TNF, based on Sec 8(6) of Chapter IV in Range Admin Manual."]
	},
	"TNTMCO1982" : {
		"Penalty":["TN.T (M. C.) Order 1982 Sec.","4"],
		"ImprisonmentAndFine": ["4)May be 3 Years or Open fine or both"]
	},
	"BD2002-55(1)" : {
		"Penalty":["B.D. Act 2002 Sec.","55(1)"],
		"ImprisonmentAndFine": ["5)Any nationality offender:\n A) May be 5 Years or ₹1000000 or Both, when BD. Damage cost is less than ₹1000000. \n B) May be 5 Years or actual damage cost or Both, when BD. Damage cost is greater than ₹1000000"]
	},
	"BD2002-55(2)" : {
		"Penalty":["B.D. Act 2002 Sec.","55(2)"],
		"ImprisonmentAndFine": ["6)Indian offender: May be 5 Years or ₹500000 or Both"]
	},
	"BD2002-56" : {
		"Penalty":["B.D. Act 2002 Sec.","56"],
		"ImprisonmentAndFine": ["7)Indian offence: A) 1st Offence: ₹100000. B) 2nd offence ₹200000"]
	},
	"WLCOMMON":{
		"Penalty":["WL(P) Act 1972 Sec.","51(1)"],
		"ImprisonmentAndFine": ["8)May be 3 Years or May be  ₹25000 or both."]
	},
	"TNRW1994":{
		"Penalty":["TN.R.W. Act 1994 Sec.","6"],
		"ImprisonmentAndFine": ["2)May be 5 Years and may be ₹20000 fine.\n 1st Offence:Shall be 2 Years and ₹7500 fine.\n 2nd Offence: Shall be 3 Years and ₹15000 fine."]
	},
	"TNPPF1949" : {
		"Penalty":["TN.P.P Forest Act 1949 Sec.","7"],
		"ImprisonmentAndFine": ["9)May be 2 Years or ₹5000 fine or both"]
	},
	"TNHP1955" : {
		"Penalty":["TN.H.P. Act 1955 Sec.","7"],
		"ImprisonmentAndFine": ["9)May be 1 Year or ₹5000 fine or both"]
	},
	"TNRWBI2010" : {
		"Penalty":["TN.R.W.B.I. Rules 2010 Sec.","13"],
		"ImprisonmentAndFine": ["9)May be 1 Month or ₹200 fine or both"]
	},
	"GenRules" : {
		"Penalty":["General Rules Sec.","15"],
		"ImprisonmentAndFine": ["9)May be 1 month or ₹200 fine or both"]
	},
	"TNF1882Sec21(2)":{
		"Penalty":["TNF Act 1882 Sec.","21(2)"],
		"ImprisonmentAndFine": ["9)May be 6 months or may be ₹500 fine or both."]
	},
	"TNF1882Sec28A(2)":{
		"Penalty":["TNF Act 1882 Sec.","28A(2)"],
		"ImprisonmentAndFine": ["9)May be 1 month and may be ₹200 fine or both."]
	}
}
