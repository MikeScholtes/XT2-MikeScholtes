let data1 = {
  type:'line', 
  data:{
    labels:['Maandag', 'Dinsdag', 'Woensdag', 'Donderdag', 'Vrijdag', 'Zaterdag', 'Zondag'],
    datasets:[{
      label:'Temperatuur',
      data:[
        21,
        20,
        23,
        25,
        19,
        22,
        25
      ],
      backgroundColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth:1,
      borderColor:'white',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Temparatuur op Mars in Celcius',
      fontSize:25
    },
    legend:{
      display:false,
      position:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
   

    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
};


let data2 = {
  type:'doughnut',
  data:{
    labels:['Douches', 'Planten', 'Vaatwassers',  'Wasmachines', 'Kranen'],
    datasets:[{
      label:'Liters',
      data:[
        3453,
        2132,
        3213,
        2321,
        3232
      ],
      backgroundColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)'
      ],
      borderWidth:1,
      borderColor:'white',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Watergebruik in Liters',
      position: 'top',
      fontSize:25
    },
    legend:{
      display:true,
      position:'right',
      labels:{
        fontColor:'white'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
};


let data3 = {
  type:'bar',
  data:{
    labels:['Hamburgers', 'Gyoza', 'Ramen', 'Pasta', 'Kip', 'Brocoli'],
    datasets:[{
      label:'Eten',
      data:[
        2300,
        9001,
        5400,
        3402,
        500,
        900
      ],
      backgroundColor:[
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
        'rgba(255, 99, 132, 1)',
        'rgba(255, 30, 32, 1)',
        'rgba(255, 129, 122, 1)',
        'rgba(155, 199, 32, 1)',
        'rgba(55, 99, 132, 1)',
        'rgba(205, 99, 132, 1)',
        'rgba(205, 199, 132, 1)',
        'rgba(155, 99, 75, 1)',
        'rgba(255, 99, 132, 1)',

      ],
      borderWidth:1,
      borderColor:'white',
      hoverBorderWidth:3,
      hoverBorderColor:'#000'
    }]
  },
  options:{
    title:{
      display:true,
      text:'Voedsel consumtie in KG',
      fontSize:25
    },
    legend:{
      display:false,
      position:'bottom',
      labels:{
        fontColor:'#000'
      }
    },
    layout:{
      padding:{
        left:50,
        right:0,
        bottom:0,
        top:0
      }
    },
    tooltips:{
      enabled:true
    }
  }
};