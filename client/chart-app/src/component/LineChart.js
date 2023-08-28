import {useEffect , useState, useContext } from 'react'
import {StateContext} from '../App'
import axios from "axios"
import { Chart as ChartJS , ArcElement , CategoryScale , LinerScale , PointElement , LineElement , Title , Tooltip,
  Legend , Filler, LinearScale, TimeScale} from "chart.js"
  import { Line } from 'react-chartjs-2';
  import '../App.css';
  import 'chartjs-adapter-date-fns';


  ChartJS.register(
    ArcElement,
    CategoryScale,
    TimeScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  );


const LineChart = () => {

  const {state, setState} = useContext(StateContext)

    const [chartData , setChartData] = useState({})

    let data;

    const fetchData = async()=>{
      const { data } = await axios.get("http://localhost:3001/api/data")
     
       console.log(data)
      setChartData({
        // labels: data.map(entry => entry.timestamp),
  
        labels:["10am","11am","12pm","1pm","2pm","3pm","4pm","5pm","6pm","7pm"],
        datasets:[
          {
            label:"Amount",
            data:data[data.length-1]?.variables.map((item )=>item),
            fill:true,
            borderColor:"rbg(255,99,132)",
            backgroundColor:'rgba(255, 99, 132, 0.3)',
          }
        ]
      })
         
      
  
    }

    useEffect(()=>{
      fetchData()
    },[state])
    
    

  return (
    <div className="App">
    <div className='chart'>
      {
        chartData && chartData?.datasets && (
          <Line 
            options={ {
                responsive: true,
                plugins: {
                  legend: {
                    position: 'top',
                  },
                  title: {
                    display: true,
                    text: '',
                  },
                },
                
              }} 
            data={chartData} 
          />
        )
      }
    </div>
  </div>
  )
}

export default LineChart
