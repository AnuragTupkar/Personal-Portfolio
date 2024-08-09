import React,{useState} from 'react'


const Intro = () => {
  const [greet, setGreet] = useState("Hello") 
  const greeting = ["Hello", "नमस्कार", " Ciao", "Hola", "नमस्ते"]
  const [screenSize, setScreenSize] = useState("screen")
  const [index, setIndex] = useState(0)

  setTimeout(()=>{
      setGreet(greeting[index])
      setIndex(index+1)
      
  },800)
  setTimeout(()=>{
    setScreenSize()
  },5800)
  return (
    <>
        <div className={`w-screen h-${screenSize} bg-black  font-thin text-white flex justify-center items-center mainFont text-[8rem]`}>
            <h1>{greet}</h1>
        </div>
    </>
  )
}

export default Intro