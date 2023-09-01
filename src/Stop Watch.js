import {useState,useEffect} from 'react'
const StopWatch=()=>{
  const[hour,setHour]=useState(0)
  const[min,setMin]=useState(0)
  const[sec,setSec]=useState(0)
  const [isRunning,setRunning]=useState(false)
  const onStartHandler=()=>{
    setRunning(true)
  }

  const onStopHandler=()=>{
    setRunning(false)
  }

  const onResetHandler=()=>{
    setHour(0)
    setMin(0)
    setSec(0)
  }

  useEffect(()=>{
    let timerId=null;

    if(isRunning){
        timerId=setInterval(()=>{
            setSec(prev => prev + 1)

           if(min >= 59){
            setHour(hour+1)
            setMin(0)
            setSec(0)
           
           } 
           if(sec >= 59){
            setMin(min+1)
            setSec(0)
           
           }
        },100)
    }
    return(()=>{
        clearInterval(timerId)
    })
  },[isRunning, sec])

  console.log(min)

  const formatTime = (value) => {
    // console.log(value)
    return Math.floor(value).toString().padStart(2, '0');
  };
    return <div className='stopwatch'>
          <h1>STOP WATCH</h1>
             <h1>{formatTime(hour)}:{formatTime(min)}:{formatTime(sec)}</h1>

        {/* <h1>{hour}:{min}:{sec}</h1> */}
        <button type="sumbit" onClick={onStartHandler}>Start</button>
        <button type="sumbit" onClick={onStopHandler}>Stop</button>
        <button type="sumbit" onClick={onResetHandler}>Reset</button>
    </div>
}

export default StopWatch;