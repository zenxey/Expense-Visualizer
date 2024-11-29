const rawData = [
  {
    "Transaction Date": "25/11/2024",
    "Withdrawal": 50,
    "Deposit": "No data",
    "Running Balance": 1011.25
  },
  {
    "Transaction Date": "24/11/2024",
    "Withdrawal": 380,
    "Deposit": "No data",
    "Running Balance": 1061.25
  },
  {
    "Transaction Date": "24/11/2024",
    "Withdrawal": 600,
    "Deposit": "No data",
    "Running Balance": 1441.25
  },
  {
    "Transaction Date": "24/11/2024",
    "Withdrawal": 3000,
    "Deposit": "No data",
    "Running Balance": 2041.25
  },
  {
    "Transaction Date": "22/11/2024",
    "Withdrawal": 380,
    "Deposit": "No data",
    "Running Balance": 5041.25
  },
  {
    "Transaction Date": "22/11/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 5421.25
  },
  {
    "Transaction Date": "21/11/2024",
    "Withdrawal": 20,
    "Deposit": "No data",
    "Running Balance": 3421.25
  },
  {
    "Transaction Date": "19/11/2024",
    "Withdrawal": 170,
    "Deposit": "No data",
    "Running Balance": 3441.25
  },
  {
    "Transaction Date": "17/11/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 3611.25
  },
  {
    "Transaction Date": "17/11/2024",
    "Withdrawal": "No data",
    "Deposit": 500,
    "Running Balance": 3711.25
  },
  {
    "Transaction Date": "17/11/2024",
    "Withdrawal": 459,
    "Deposit": "No data",
    "Running Balance": 3211.25
  },
  {
    "Transaction Date": "14/11/2024",
    "Withdrawal": 80,
    "Deposit": "No data",
    "Running Balance": 3670.25
  },
  {
    "Transaction Date": "14/11/2024",
    "Withdrawal": 285,
    "Deposit": "No data",
    "Running Balance": 3750.25
  },
  {
    "Transaction Date": "12/11/2024",
    "Withdrawal": 500,
    "Deposit": "No data",
    "Running Balance": 4035.25
  },
  {
    "Transaction Date": "11/11/2024",
    "Withdrawal": 472.94,
    "Deposit": "No data",
    "Running Balance": 4535.25
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "11/11/2024",
    "Withdrawal": 3500,
    "Deposit": "No data",
    "Running Balance": 5008.19
  },
  {
    "Transaction Date": "11/11/2024",
    "Withdrawal": 1000,
    "Deposit": "No data",
    "Running Balance": 8508.19
  },
  {
    "Transaction Date": "10/11/2024",
    "Withdrawal": 349,
    "Deposit": "No data",
    "Running Balance": 9508.19
  },
  {
    "Transaction Date": "08/11/2024",
    "Withdrawal": 300,
    "Deposit": "No data",
    "Running Balance": 9857.19
  },
  {
    "Transaction Date": "08/11/2024",
    "Withdrawal": 200,
    "Deposit": "No data",
    "Running Balance": 10157.19
  },
  {
    "Transaction Date": "08/11/2024",
    "Withdrawal": 1613,
    "Deposit": "No data",
    "Running Balance": 10357.19
  },
  {
    "Transaction Date": "08/11/2024",
    "Withdrawal": "No data",
    "Deposit": 1600,
    "Running Balance": 11970.19
  },
  {
    "Transaction Date": "04/11/2024",
    "Withdrawal": 50,
    "Deposit": "No data",
    "Running Balance": 10370.19
  },
  {
    "Transaction Date": "04/11/2024",
    "Withdrawal": 450,
    "Deposit": "No data",
    "Running Balance": 10420.19
  },
  {
    "Transaction Date": "04/11/2024",
    "Withdrawal": "No data",
    "Deposit": 500,
    "Running Balance": 10870.19
  },
  {
    "Transaction Date": "04/11/2024",
    "Withdrawal": "No data",
    "Deposit": 500,
    "Running Balance": 10370.19
  },
  {
    "Transaction Date": "02/11/2024",
    "Withdrawal": 40,
    "Deposit": "No data",
    "Running Balance": 9870.19
  },
  {
    "Transaction Date": "02/11/2024",
    "Withdrawal": 285,
    "Deposit": "No data",
    "Running Balance": 9910.19
  },
  {
    "Transaction Date": "02/11/2024",
    "Withdrawal": "No data",
    "Deposit": 100,
    "Running Balance": 10195.19
  },
  {
    "Transaction Date": "31/10/2024",
    "Withdrawal": "No data",
    "Deposit": 230,
    "Running Balance": 10095.19
  },
  {
    "Transaction Date": "31/10/2024",
    "Withdrawal": 229.94,
    "Deposit": "No data",
    "Running Balance": 9865.19
  },
  {
    "Transaction Date": "31/10/2024",
    "Withdrawal": "No data",
    "Deposit": 8500,
    "Running Balance": 10095.13
  },
  {
    "Transaction Date": "30/10/2024",
    "Withdrawal": 40,
    "Deposit": "No data",
    "Running Balance": 1595.13
  },
  {
    "Transaction Date": "29/10/2024",
    "Withdrawal": "No data",
    "Deposit": 1000,
    "Running Balance": 1635.13
  },
  {
    "Transaction Date": "28/10/2024",
    "Withdrawal": 285,
    "Deposit": "No data",
    "Running Balance": 635.13
  },
  {
    "Transaction Date": "27/10/2024",
    "Withdrawal": 285,
    "Deposit": "No data",
    "Running Balance": 920.13
  },
  {
    "Transaction Date": "24/10/2024",
    "Withdrawal": 190,
    "Deposit": "No data",
    "Running Balance": 1205.13
  },
  {
    "Transaction Date": "24/10/2024",
    "Withdrawal": 380,
    "Deposit": "No data",
    "Running Balance": 1395.13
  },
  {
    "Transaction Date": "24/10/2024",
    "Withdrawal": "No data",
    "Deposit": 150,
    "Running Balance": 1775.13
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "18/10/2024",
    "Withdrawal": 604.26,
    "Deposit": "No data",
    "Running Balance": 1625.13
  },
  {
    "Transaction Date": "16/10/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 2229.39
  },
  {
    "Transaction Date": "16/10/2024",
    "Withdrawal": 2200,
    "Deposit": "No data",
    "Running Balance": 2329.39
  },
  {
    "Transaction Date": "16/10/2024",
    "Withdrawal": 1490,
    "Deposit": "No data",
    "Running Balance": 4529.39
  },
  {
    "Transaction Date": "16/10/2024",
    "Withdrawal": "No data",
    "Deposit": 1190,
    "Running Balance": 6019.39
  },
  {
    "Transaction Date": "15/10/2024",
    "Withdrawal": "No data",
    "Deposit": 2200,
    "Running Balance": 4829.39
  },
  {
    "Transaction Date": "12/10/2024",
    "Withdrawal": 343,
    "Deposit": "No data",
    "Running Balance": 2629.39
  },
  {
    "Transaction Date": "10/10/2024",
    "Withdrawal": 380,
    "Deposit": "No data",
    "Running Balance": 2972.39
  },
  {
    "Transaction Date": "10/10/2024",
    "Withdrawal": "No data",
    "Deposit": 500,
    "Running Balance": 3352.39
  },
  {
    "Transaction Date": "10/10/2024",
    "Withdrawal": "No data",
    "Deposit": 11,
    "Running Balance": 2852.39
  },
  {
    "Transaction Date": "09/10/2024",
    "Withdrawal": "No data",
    "Deposit": 150,
    "Running Balance": 2841.39
  },
  {
    "Transaction Date": "09/10/2024",
    "Withdrawal": 1190,
    "Deposit": "No data",
    "Running Balance": 2691.39
  },
  {
    "Transaction Date": "08/10/2024",
    "Withdrawal": 6,
    "Deposit": "No data",
    "Running Balance": 3881.39
  },
  {
    "Transaction Date": "08/10/2024",
    "Withdrawal": 140,
    "Deposit": "No data",
    "Running Balance": 3887.39
  },
  {
    "Transaction Date": "08/10/2024",
    "Withdrawal": 334,
    "Deposit": "No data",
    "Running Balance": 4027.39
  },
  {
    "Transaction Date": "05/10/2024",
    "Withdrawal": 275.58,
    "Deposit": "No data",
    "Running Balance": 4361.39
  },
  {
    "Transaction Date": "05/10/2024",
    "Withdrawal": "No data",
    "Deposit": 150,
    "Running Balance": 4636.97
  },
  {
    "Transaction Date": "04/10/2024",
    "Withdrawal": 1500,
    "Deposit": "No data",
    "Running Balance": 4486.97
  },
  {
    "Transaction Date": "04/10/2024",
    "Withdrawal": 22,
    "Deposit": "No data",
    "Running Balance": 5986.97
  },
  {
    "Transaction Date": "04/10/2024",
    "Withdrawal": 227,
    "Deposit": "No data",
    "Running Balance": 6008.97
  },
  {
    "Transaction Date": "02/10/2024",
    "Withdrawal": 1190,
    "Deposit": "No data",
    "Running Balance": 6235.97
  },
  {
    "Transaction Date": "01/10/2024",
    "Withdrawal": "No data",
    "Deposit": 92,
    "Running Balance": 7425.97
  },
  {
    "Transaction Date": "29/09/2024",
    "Withdrawal": 125,
    "Deposit": "No data",
    "Running Balance": 7333.97
  },
  {
    "Transaction Date": "29/09/2024",
    "Withdrawal": 50,
    "Deposit": "No data",
    "Running Balance": 7458.97
  },
  {
    "Transaction Date": "29/09/2024",
    "Withdrawal": 199,
    "Deposit": "No data",
    "Running Balance": 7508.97
  },
  {
    "Transaction Date": "29/09/2024",
    "Withdrawal": 232,
    "Deposit": "No data",
    "Running Balance": 7707.97
  },
  {
    "Transaction Date": "29/09/2024",
    "Withdrawal": 49,
    "Deposit": "No data",
    "Running Balance": 7939.97
  },
  {
    "Transaction Date": "28/09/2024",
    "Withdrawal": 22,
    "Deposit": "No data",
    "Running Balance": 7988.97
  },
  {
    "Transaction Date": "27/09/2024",
    "Withdrawal": 750,
    "Deposit": "No data",
    "Running Balance": 8010.97
  },
  {
    "Transaction Date": "27/09/2024",
    "Withdrawal": 120,
    "Deposit": "No data",
    "Running Balance": 8760.97
  },
  {
    "Transaction Date": "27/09/2024",
    "Withdrawal": 175,
    "Deposit": "No data",
    "Running Balance": 8880.97
  },
  {
    "Transaction Date": "25/09/2024",
    "Withdrawal": 250,
    "Deposit": "No data",
    "Running Balance": 9055.97
  },
  {
    "Transaction Date": "24/09/2024",
    "Withdrawal": "No data",
    "Deposit": 1,
    "Running Balance": 9305.97
  },
  {
    "Transaction Date": "23/09/2024",
    "Withdrawal": 989,
    "Deposit": "No data",
    "Running Balance": 9304.97
  },
  {
    "Transaction Date": "23/09/2024",
    "Withdrawal": 2500,
    "Deposit": "No data",
    "Running Balance": 10293.97
  },
  {
    "Transaction Date": "21/09/2024",
    "Withdrawal": 84,
    "Deposit": "No data",
    "Running Balance": 12793.97
  },
  {
    "Transaction Date": "18/09/2024",
    "Withdrawal": 450,
    "Deposit": "No data",
    "Running Balance": 12877.97
  },
  {
    "Transaction Date": "18/09/2024",
    "Withdrawal": 20,
    "Deposit": "No data",
    "Running Balance": 13327.97
  },
  {
    "Transaction Date": "13/09/2024",
    "Withdrawal": "No data",
    "Deposit": 20,
    "Running Balance": 13347.97
  },
  {
    "Transaction Date": "13/09/2024",
    "Withdrawal": 20,
    "Deposit": "No data",
    "Running Balance": 13327.97
  },
  {
    "Transaction Date": "11/09/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 13347.97
  },
  {
    "Transaction Date": "11/09/2024",
    "Withdrawal": 40,
    "Deposit": "No data",
    "Running Balance": 15347.97
  },
  {
    "Transaction Date": "10/09/2024",
    "Withdrawal": 140,
    "Deposit": "No data",
    "Running Balance": 15387.97
  },
  {
    "Transaction Date": "09/09/2024",
    "Withdrawal": "No data",
    "Deposit": 15000,
    "Running Balance": 15527.97
  },
  {
    "Transaction Date": "08/09/2024",
    "Withdrawal": 385,
    "Deposit": "No data",
    "Running Balance": 527.97
  },
  {
    "Transaction Date": "07/09/2024",
    "Withdrawal": 280,
    "Deposit": "No data",
    "Running Balance": 912.97
  },
  {
    "Transaction Date": "07/09/2024",
    "Withdrawal": 150,
    "Deposit": "No data",
    "Running Balance": 1192.97
  },
  {
    "Transaction Date": "06/09/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 1342.97
  },
  {
    "Transaction Date": "06/09/2024",
    "Withdrawal": 198,
    "Deposit": "No data",
    "Running Balance": 1442.97
  },
  {
    "Transaction Date": "06/09/2024",
    "Withdrawal": 280,
    "Deposit": "No data",
    "Running Balance": 1640.97
  },
  {
    "Transaction Date": "06/09/2024",
    "Withdrawal": 5,
    "Deposit": "No data",
    "Running Balance": 1920.97
  },
  {
    "Transaction Date": "06/09/2024",
    "Withdrawal": 285,
    "Deposit": "No data",
    "Running Balance": 1925.97
  },
  {
    "Transaction Date": "06/09/2024",
    "Withdrawal": "No data",
    "Deposit": 900,
    "Running Balance": 2210.97
  },
  {
    "Transaction Date": "06/09/2024",
    "Withdrawal": 859,
    "Deposit": "No data",
    "Running Balance": 1310.97
  },
  {
    "Transaction Date": "03/09/2024",
    "Withdrawal": 28910,
    "Deposit": "No data",
    "Running Balance": 2169.97
  },
  {
    "Transaction Date": "03/09/2024",
    "Withdrawal": "No data",
    "Deposit": 1495,
    "Running Balance": 31079.97
  },
  {
    "Transaction Date": "03/09/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 29584.97
  },
  {
    "Transaction Date": "03/09/2024",
    "Withdrawal": "No data",
    "Deposit": 10000,
    "Running Balance": 27584.97
  },
  {
    "Transaction Date": "03/09/2024",
    "Withdrawal": "No data",
    "Deposit": 10000,
    "Running Balance": 17584.97
  },
  {
    "Transaction Date": "02/09/2024",
    "Withdrawal": 10,
    "Deposit": "No data",
    "Running Balance": 7584.97
  },
  {
    "Transaction Date": "28/08/2024",
    "Withdrawal": 4550,
    "Deposit": "No data",
    "Running Balance": 7594.97
  },
  {
    "Transaction Date": "26/08/2024",
    "Withdrawal": 85,
    "Deposit": "No data",
    "Running Balance": 12144.97
  },
  {
    "Transaction Date": "26/08/2024",
    "Withdrawal": 130,
    "Deposit": "No data",
    "Running Balance": 12229.97
  },
  {
    "Transaction Date": "26/08/2024",
    "Withdrawal": 99,
    "Deposit": "No data",
    "Running Balance": 12359.97
  },
  {
    "Transaction Date": "25/08/2024",
    "Withdrawal": 77,
    "Deposit": "No data",
    "Running Balance": 12458.97
  },
  {
    "Transaction Date": "24/08/2024",
    "Withdrawal": 320,
    "Deposit": "No data",
    "Running Balance": 12535.97
  },
  {
    "Transaction Date": "24/08/2024",
    "Withdrawal": 62,
    "Deposit": "No data",
    "Running Balance": 12855.97
  },
  {
    "Transaction Date": "20/08/2024",
    "Withdrawal": "No data",
    "Deposit": 1000,
    "Running Balance": 12917.97
  },
  {
    "Transaction Date": "17/08/2024",
    "Withdrawal": 1666,
    "Deposit": "No data",
    "Running Balance": 11917.97
  },
  {
    "Transaction Date": "15/08/2024",
    "Withdrawal": 398.73,
    "Deposit": "No data",
    "Running Balance": 13583.97
  },
  {
    "Transaction Date": "15/08/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 13982.7
  },
  {
    "Transaction Date": "14/08/2024",
    "Withdrawal": 460.73,
    "Deposit": "No data",
    "Running Balance": 11982.7
  },
  {
    "Transaction Date": "14/08/2024",
    "Withdrawal": 2200,
    "Deposit": "No data",
    "Running Balance": 12443.43
  },
  {
    "Transaction Date": "14/08/2024",
    "Withdrawal": "No data",
    "Deposit": 1422,
    "Running Balance": 14643.43
  },
  {
    "Transaction Date": "14/08/2024",
    "Withdrawal": 3031,
    "Deposit": "No data",
    "Running Balance": 13221.43
  },
  {
    "Transaction Date": "13/08/2024",
    "Withdrawal": "No data",
    "Deposit": 2200,
    "Running Balance": 16252.43
  },
  {
    "Transaction Date": "13/08/2024",
    "Withdrawal": 2200,
    "Deposit": "No data",
    "Running Balance": 14052.43
  },
  {
    "Transaction Date": "13/08/2024",
    "Withdrawal": 5100,
    "Deposit": "No data",
    "Running Balance": 16252.43
  },
  {
    "Transaction Date": "13/08/2024",
    "Withdrawal": 118,
    "Deposit": "No data",
    "Running Balance": 21352.43
  },
  {
    "Transaction Date": "12/08/2024",
    "Withdrawal": "No data",
    "Deposit": 15000,
    "Running Balance": 21470.43
  },
  {
    "Transaction Date": "10/08/2024",
    "Withdrawal": 17,
    "Deposit": "No data",
    "Running Balance": 6470.43
  },
  {
    "Transaction Date": "10/08/2024",
    "Withdrawal": 295,
    "Deposit": "No data",
    "Running Balance": 6487.43
  },
  {
    "Transaction Date": "10/08/2024",
    "Withdrawal": 20,
    "Deposit": "No data",
    "Running Balance": 6782.43
  },
  {
    "Transaction Date": "08/08/2024",
    "Withdrawal": 285,
    "Deposit": "No data",
    "Running Balance": 6802.43
  },
  {
    "Transaction Date": "06/08/2024",
    "Withdrawal": "No data",
    "Deposit": 1214,
    "Running Balance": 7087.43
  },
  {
    "Transaction Date": "06/08/2024",
    "Withdrawal": 231.78,
    "Deposit": "No data",
    "Running Balance": 5873.43
  },
  {
    "Transaction Date": "05/08/2024",
    "Withdrawal": "No data",
    "Deposit": 435,
    "Running Balance": 6105.21
  },
  {
    "Transaction Date": "05/08/2024",
    "Withdrawal": "No data",
    "Deposit": 610,
    "Running Balance": 5670.21
  },
  {
    "Transaction Date": "04/08/2024",
    "Withdrawal": 25,
    "Deposit": "No data",
    "Running Balance": 5060.21
  },
  {
    "Transaction Date": "04/08/2024",
    "Withdrawal": 156,
    "Deposit": "No data",
    "Running Balance": 5085.21
  },
  {
    "Transaction Date": "04/08/2024",
    "Withdrawal": 3644,
    "Deposit": "No data",
    "Running Balance": 5241.21
  },
  {
    "Transaction Date": "03/08/2024",
    "Withdrawal": 200,
    "Deposit": "No data",
    "Running Balance": 8885.21
  },
  {
    "Transaction Date": "02/08/2024",
    "Withdrawal": 150,
    "Deposit": "No data",
    "Running Balance": 9085.21
  },
  {
    "Transaction Date": "02/08/2024",
    "Withdrawal": 77,
    "Deposit": "No data",
    "Running Balance": 9235.21
  },
  {
    "Transaction Date": "31/07/2024",
    "Withdrawal": 382.83,
    "Deposit": "No data",
    "Running Balance": 9312.21
  },
  {
    "Transaction Date": "27/07/2024",
    "Withdrawal": 285,
    "Deposit": "No data",
    "Running Balance": 9695.04
  },
  {
    "Transaction Date": "27/07/2024",
    "Withdrawal": 200,
    "Deposit": "No data",
    "Running Balance": 9980.04
  },
  {
    "Transaction Date": "23/07/2024",
    "Withdrawal": 468,
    "Deposit": "No data",
    "Running Balance": 10180.04
  },
  {
    "Transaction Date": "20/07/2024",
    "Withdrawal": 594.99,
    "Deposit": "No data",
    "Running Balance": 10648.04
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "20/07/2024",
    "Withdrawal": 90,
    "Deposit": "No data",
    "Running Balance": 11243.03
  },
  {
    "Transaction Date": "20/07/2024",
    "Withdrawal": "No data",
    "Deposit": 1045,
    "Running Balance": 11333.03
  },
  {
    "Transaction Date": "19/07/2024",
    "Withdrawal": "No data",
    "Deposit": 806.61,
    "Running Balance": 10288.03
  },
  {
    "Transaction Date": "18/07/2024",
    "Withdrawal": 124.65,
    "Deposit": "No data",
    "Running Balance": 9481.42
  },
  {
    "Transaction Date": "18/07/2024",
    "Withdrawal": 1265,
    "Deposit": "No data",
    "Running Balance": 9606.07
  },
  {
    "Transaction Date": "16/07/2024",
    "Withdrawal": "No data",
    "Deposit": 254,
    "Running Balance": 10871.07
  },
  {
    "Transaction Date": "15/07/2024",
    "Withdrawal": 200,
    "Deposit": "No data",
    "Running Balance": 10617.07
  },
  {
    "Transaction Date": "15/07/2024",
    "Withdrawal": 500,
    "Deposit": "No data",
    "Running Balance": 10817.07
  },
  {
    "Transaction Date": "15/07/2024",
    "Withdrawal": 825.61,
    "Deposit": "No data",
    "Running Balance": 11317.07
  },
  {
    "Transaction Date": "15/07/2024",
    "Withdrawal": 200,
    "Deposit": "No data",
    "Running Balance": 12142.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 20000,
    "Deposit": "No data",
    "Running Balance": 12342.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 990,
    "Deposit": "No data",
    "Running Balance": 32342.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 33332.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 20,
    "Deposit": "No data",
    "Running Balance": 33432.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 30,
    "Deposit": "No data",
    "Running Balance": 33452.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 50,
    "Deposit": "No data",
    "Running Balance": 33482.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 254,
    "Deposit": "No data",
    "Running Balance": 33532.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 254,
    "Deposit": "No data",
    "Running Balance": 33786.68
  },
  {
    "Transaction Date": "14/07/2024",
    "Withdrawal": 33,
    "Deposit": "No data",
    "Running Balance": 34040.68
  },
  {
    "Transaction Date": "13/07/2024",
    "Withdrawal": 280,
    "Deposit": "No data",
    "Running Balance": 34073.68
  },
  {
    "Transaction Date": "13/07/2024",
    "Withdrawal": 12,
    "Deposit": "No data",
    "Running Balance": 34353.68
  },
  {
    "Transaction Date": "12/07/2024",
    "Withdrawal": 120,
    "Deposit": "No data",
    "Running Balance": 34365.68
  },
  {
    "Transaction Date": "12/07/2024",
    "Withdrawal": 150,
    "Deposit": "No data",
    "Running Balance": 34485.68
  },
  {
    "Transaction Date": "12/07/2024",
    "Withdrawal": 5,
    "Deposit": "No data",
    "Running Balance": 34635.68
  },
  {
    "Transaction Date": "12/07/2024",
    "Withdrawal": 60,
    "Deposit": "No data",
    "Running Balance": 34640.68
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "11/07/2024",
    "Withdrawal": 331.4,
    "Deposit": "No data",
    "Running Balance": 34700.68
  },
  {
    "Transaction Date": "09/07/2024",
    "Withdrawal": 11,
    "Deposit": "No data",
    "Running Balance": 35032.08
  },
  {
    "Transaction Date": "09/07/2024",
    "Withdrawal": "No data",
    "Deposit": 15000,
    "Running Balance": 35043.08
  },
  {
    "Transaction Date": "07/07/2024",
    "Withdrawal": 325,
    "Deposit": "No data",
    "Running Balance": 20043.08
  },
  {
    "Transaction Date": "06/07/2024",
    "Withdrawal": 300,
    "Deposit": "No data",
    "Running Balance": 20368.08
  },
  {
    "Transaction Date": "04/07/2024",
    "Withdrawal": 147.56,
    "Deposit": "No data",
    "Running Balance": 20668.08
  },
  {
    "Transaction Date": "02/07/2024",
    "Withdrawal": 220,
    "Deposit": "No data",
    "Running Balance": 20815.64
  },
  {
    "Transaction Date": "01/07/2024",
    "Withdrawal": 10,
    "Deposit": "No data",
    "Running Balance": 21035.64
  },
  {
    "Transaction Date": "01/07/2024",
    "Withdrawal": 273.65,
    "Deposit": "No data",
    "Running Balance": 21045.64
  },
  {
    "Transaction Date": "01/07/2024",
    "Withdrawal": "No data",
    "Deposit": 45,
    "Running Balance": 21319.29
  },
  {
    "Transaction Date": "29/06/2024",
    "Withdrawal": 360,
    "Deposit": "No data",
    "Running Balance": 21274.29
  },
  {
    "Transaction Date": "28/06/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 21634.29
  },
  {
    "Transaction Date": "26/06/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 19734.29
  },
  {
    "Transaction Date": "26/06/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 21734.29
  },
  {
    "Transaction Date": "24/06/2024",
    "Withdrawal": "No data",
    "Deposit": 20000,
    "Running Balance": 21734.29
  },
  {
    "Transaction Date": "22/06/2024",
    "Withdrawal": 172,
    "Deposit": "No data",
    "Running Balance": 1734.29
  },
  {
    "Transaction Date": "21/06/2024",
    "Withdrawal": 510,
    "Deposit": "No data",
    "Running Balance": 1906.29
  },
  {
    "Transaction Date": "21/06/2024",
    "Withdrawal": "No data",
    "Deposit": 500,
    "Running Balance": 2416.29
  },
  {
    "Transaction Date": "21/06/2024",
    "Withdrawal": 5000,
    "Deposit": "No data",
    "Running Balance": 1916.29
  },
  {
    "Transaction Date": "18/06/2024",
    "Withdrawal": 350,
    "Deposit": "No data",
    "Running Balance": 6916.29
  },
  {
    "Transaction Date": "18/06/2024",
    "Withdrawal": 1253,
    "Deposit": "No data",
    "Running Balance": 7266.29
  },
  {
    "Transaction Date": "17/06/2024",
    "Withdrawal": 4000,
    "Deposit": "No data",
    "Running Balance": 8519.29
  },
  {
    "Transaction Date": "16/06/2024",
    "Withdrawal": 200,
    "Deposit": "No data",
    "Running Balance": 12519.29
  },
  {
    "Transaction Date": "13/06/2024",
    "Withdrawal": 719,
    "Deposit": "No data",
    "Running Balance": 12719.29
  },
  {
    "Transaction Date": "12/06/2024",
    "Withdrawal": 272,
    "Deposit": "No data",
    "Running Balance": 13438.29
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "12/06/2024",
    "Withdrawal": "No data",
    "Deposit": 5000,
    "Running Balance": 13710.29
  },
  {
    "Transaction Date": "11/06/2024",
    "Withdrawal": 4615,
    "Deposit": "No data",
    "Running Balance": 8710.29
  },
  {
    "Transaction Date": "10/06/2024",
    "Withdrawal": 1605,
    "Deposit": "No data",
    "Running Balance": 13325.29
  },
  {
    "Transaction Date": "10/06/2024",
    "Withdrawal": 60,
    "Deposit": "No data",
    "Running Balance": 14930.29
  },
  {
    "Transaction Date": "10/06/2024",
    "Withdrawal": 10,
    "Deposit": "No data",
    "Running Balance": 14990.29
  },
  {
    "Transaction Date": "10/06/2024",
    "Withdrawal": "No data",
    "Deposit": 15000,
    "Running Balance": 15000.29
  },
  {
    "Transaction Date": "06/06/2024",
    "Withdrawal": 651,
    "Deposit": "No data",
    "Running Balance": 0.29
  },
  {
    "Transaction Date": "03/06/2024",
    "Withdrawal": 500,
    "Deposit": "No data",
    "Running Balance": 651.29
  },
  {
    "Transaction Date": "02/06/2024",
    "Withdrawal": 28.5,
    "Deposit": "No data",
    "Running Balance": 1151.29
  },
  {
    "Transaction Date": "31/05/2024",
    "Withdrawal": 500,
    "Deposit": "No data",
    "Running Balance": 1179.79
  },
  {
    "Transaction Date": "31/05/2024",
    "Withdrawal": "No data",
    "Deposit": 200,
    "Running Balance": 1679.79
  },
  {
    "Transaction Date": "31/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 1479.79
  },
  {
    "Transaction Date": "31/05/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 5479.79
  },
  {
    "Transaction Date": "31/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 3479.79
  },
  {
    "Transaction Date": "29/05/2024",
    "Withdrawal": 500,
    "Deposit": "No data",
    "Running Balance": 3479.79
  },
  {
    "Transaction Date": "29/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 1979.79
  },
  {
    "Transaction Date": "29/05/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 3979.79
  },
  {
    "Transaction Date": "29/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 1979.79
  },
  {
    "Transaction Date": "29/05/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 3979.79
  },
  {
    "Transaction Date": "28/05/2024",
    "Withdrawal": 413,
    "Deposit": "No data",
    "Running Balance": 3979.79
  },
  {
    "Transaction Date": "28/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 2392.79
  },
  {
    "Transaction Date": "28/05/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 4392.79
  },
  {
    "Transaction Date": "28/05/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 4392.79
  },
  {
    "Transaction Date": "28/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 2392.79
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "26/05/2024",
    "Withdrawal": 316.91,
    "Deposit": "No data",
    "Running Balance": 4392.79
  },
  {
    "Transaction Date": "25/05/2024",
    "Withdrawal": 195.7,
    "Deposit": "No data",
    "Running Balance": 4709.7
  },
  {
    "Transaction Date": "21/05/2024",
    "Withdrawal": 2500,
    "Deposit": "No data",
    "Running Balance": 4905.4
  },
  {
    "Transaction Date": "21/05/2024",
    "Withdrawal": "No data",
    "Deposit": 5000,
    "Running Balance": 7405.4
  },
  {
    "Transaction Date": "20/05/2024",
    "Withdrawal": 20,
    "Deposit": "No data",
    "Running Balance": 2405.4
  },
  {
    "Transaction Date": "20/05/2024",
    "Withdrawal": 110.9,
    "Deposit": "No data",
    "Running Balance": 2425.4
  },
  {
    "Transaction Date": "19/05/2024",
    "Withdrawal": 170,
    "Deposit": "No data",
    "Running Balance": 2536.3
  },
  {
    "Transaction Date": "19/05/2024",
    "Withdrawal": 321.9,
    "Deposit": "No data",
    "Running Balance": 2706.3
  },
  {
    "Transaction Date": "19/05/2024",
    "Withdrawal": "No data",
    "Deposit": 1500,
    "Running Balance": 3028.2
  },
  {
    "Transaction Date": "18/05/2024",
    "Withdrawal": "No data",
    "Deposit": 1,
    "Running Balance": 1528.2
  },
  {
    "Transaction Date": "18/05/2024",
    "Withdrawal": 50,
    "Deposit": "No data",
    "Running Balance": 1527.2
  },
  {
    "Transaction Date": "16/05/2024",
    "Withdrawal": 1,
    "Deposit": "No data",
    "Running Balance": 1577.2
  },
  {
    "Transaction Date": "15/05/2024",
    "Withdrawal": 400,
    "Deposit": "No data",
    "Running Balance": 1578.2
  },
  {
    "Transaction Date": "15/05/2024",
    "Withdrawal": 5000,
    "Deposit": "No data",
    "Running Balance": 1978.2
  },
  {
    "Transaction Date": "15/05/2024",
    "Withdrawal": 39,
    "Deposit": "No data",
    "Running Balance": 6978.2
  },
  {
    "Transaction Date": "15/05/2024",
    "Withdrawal": 2552,
    "Deposit": "No data",
    "Running Balance": 7017.2
  },
  {
    "Transaction Date": "14/05/2024",
    "Withdrawal": 120,
    "Deposit": "No data",
    "Running Balance": 9569.2
  },
  {
    "Transaction Date": "14/05/2024",
    "Withdrawal": 4200,
    "Deposit": "No data",
    "Running Balance": 5489.2
  },
  {
    "Transaction Date": "14/05/2024",
    "Withdrawal": "No data",
    "Deposit": 4200,
    "Running Balance": 9689.2
  },
  {
    "Transaction Date": "14/05/2024",
    "Withdrawal": "No data",
    "Deposit": 4200,
    "Running Balance": 9689.2
  },
  {
    "Transaction Date": "14/05/2024",
    "Withdrawal": 4200,
    "Deposit": "No data",
    "Running Balance": 5489.2
  },
  {
    "Transaction Date": "13/05/2024",
    "Withdrawal": 300,
    "Deposit": "No data",
    "Running Balance": 9689.2
  },
  {
    "Transaction Date": "13/05/2024",
    "Withdrawal": "No data",
    "Deposit": 300,
    "Running Balance": 9989.2
  },
  {
    "Transaction Date": "12/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 9689.2
  },
  {
    "Transaction Date": "12/05/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 11689.2
  },
  {
    "Transaction Date": "12/05/2024",
    "Withdrawal": 140,
    "Deposit": "No data",
    "Running Balance": 9689.2
  },
  {
    "Transaction Date": "12/05/2024",
    "Withdrawal": 554,
    "Deposit": "No data",
    "Running Balance": 9829.2
  },
  {
    "Transaction Date": "10/05/2024",
    "Withdrawal": 69,
    "Deposit": "No data",
    "Running Balance": 10383.2
  },
  {
    "Transaction Date": "10/05/2024",
    "Withdrawal": 340,
    "Deposit": "No data",
    "Running Balance": 10452.2
  },
  {
    "Transaction Date": "10/05/2024",
    "Withdrawal": 130,
    "Deposit": "No data",
    "Running Balance": 10792.2
  },
  {
    "Transaction Date": "09/05/2024",
    "Withdrawal": 2200,
    "Deposit": "No data",
    "Running Balance": 10922.2
  },
  {
    "Transaction Date": "09/05/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 13122.2
  },
  {
    "Transaction Date": "09/05/2024",
    "Withdrawal": "No data",
    "Deposit": 15000,
    "Running Balance": 15122.2
  },
  {
    "Transaction Date": "06/05/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 122.2
  },
  {
    "Transaction Date": "01/05/2024",
    "Withdrawal": 200,
    "Deposit": "No data",
    "Running Balance": 222.2
  },
  {
    "Transaction Date": "01/05/2024",
    "Withdrawal": 293.6,
    "Deposit": "No data",
    "Running Balance": 422.2
  },
  {
    "Transaction Date": "30/04/2024",
    "Withdrawal": 1310,
    "Deposit": "No data",
    "Running Balance": 715.8
  },
  {
    "Transaction Date": "30/04/2024",
    "Withdrawal": "No data",
    "Deposit": 1310,
    "Running Balance": 2025.8
  },
  {
    "Transaction Date": "29/04/2024",
    "Withdrawal": 295,
    "Deposit": "No data",
    "Running Balance": 715.8
  },
  {
    "Transaction Date": "29/04/2024",
    "Withdrawal": 300,
    "Deposit": "No data",
    "Running Balance": 1010.8
  },
  {
    "Transaction Date": "27/04/2024",
    "Withdrawal": 960,
    "Deposit": "No data",
    "Running Balance": 1310.8
  },
  {
    "Transaction Date": "27/04/2024",
    "Withdrawal": 1771.79,
    "Deposit": "No data",
    "Running Balance": 2270.8
  },
  {
    "Transaction Date": "27/04/2024",
    "Withdrawal": 1617.99,
    "Deposit": "No data",
    "Running Balance": 4042.59
  },
  {
    "Transaction Date": "27/04/2024",
    "Withdrawal": "No data",
    "Deposit": 2000,
    "Running Balance": 5660.58
  },
  {
    "Transaction Date": "27/04/2024",
    "Withdrawal": "No data",
    "Deposit": 3000,
    "Running Balance": 3660.58
  },
  {
    "Transaction Date": "27/04/2024",
    "Withdrawal": 1500,
    "Deposit": "No data",
    "Running Balance": 660.58
  },
  {
    "Transaction Date": "26/04/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 2160.58
  },
  {
    "Transaction Date": "26/04/2024",
    "Withdrawal": "No data",
    "Deposit": 1000,
    "Running Balance": 2260.58
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "25/04/2024",
    "Withdrawal": 190,
    "Deposit": "No data",
    "Running Balance": 1260.58
  },
  {
    "Transaction Date": "24/04/2024",
    "Withdrawal": 100,
    "Deposit": "No data",
    "Running Balance": 1450.58
  },
  {
    "Transaction Date": "24/04/2024",
    "Withdrawal": 99.99,
    "Deposit": "No data",
    "Running Balance": 1550.58
  },
  {
    "Transaction Date": "23/04/2024",
    "Withdrawal": 329.04,
    "Deposit": "No data",
    "Running Balance": 1650.57
  },
  {
    "Transaction Date": "23/04/2024",
    "Withdrawal": 400,
    "Deposit": "No data",
    "Running Balance": 1979.61
  },
  {
    "Transaction Date": "22/04/2024",
    "Withdrawal": 116.04,
    "Deposit": "No data",
    "Running Balance": 2379.61
  },
  {
    "Transaction Date": "21/04/2024",
    "Withdrawal": 183.35,
    "Deposit": "No data",
    "Running Balance": 2495.65
  },
  {
    "Transaction Date": "20/04/2024",
    "Withdrawal": 222,
    "Deposit": "No data",
    "Running Balance": 2679
  },
  {
    "Transaction Date": "20/04/2024",
    "Withdrawal": 12000,
    "Deposit": "No data",
    "Running Balance": 2901
  },
  {
    "Transaction Date": "20/04/2024",
    "Withdrawal": "No data",
    "Deposit": 10000,
    "Running Balance": 14901
  },
  {
    "Transaction Date": "19/04/2024",
    "Withdrawal": 4294,
    "Deposit": "No data",
    "Running Balance": 4901
  },
  {
    "Transaction Date": "18/04/2024",
    "Withdrawal": 350,
    "Deposit": "No data",
    "Running Balance": 9195
  },
  {
    "Transaction Date": "18/04/2024",
    "Withdrawal": 2500,
    "Deposit": "No data",
    "Running Balance": 9545
  },
  {
    "Transaction Date": "16/04/2024",
    "Withdrawal": 650,
    "Deposit": "No data",
    "Running Balance": 12045
  },
  {
    "Transaction Date": "16/04/2024",
    "Withdrawal": 305,
    "Deposit": "No data",
    "Running Balance": 12695
  },
  {
    "Transaction Date": "16/04/2024",
    "Withdrawal": "No data",
    "Deposit": 1600,
    "Running Balance": 14600
  },
  {
    "Transaction Date": "16/04/2024",
    "Withdrawal": 1600,
    "Deposit": "No data",
    "Running Balance": 13000
  },
  {
    "Transaction Date": "15/04/2024",
    "Withdrawal": 2000,
    "Deposit": "No data",
    "Running Balance": 13000
  },
  {
    "Transaction Date": "10/04/2024",
    "Withdrawal": "No data",
    "Deposit": 15000,
    "Running Balance": 15000
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  },
  {
    "Transaction Date": "00/01/1900",
    "Withdrawal": "No data",
    "Deposit": "No data",
    "Running Balance": "No data"
  }

];
export default rawData;