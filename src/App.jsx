import ColorBox from './ColorBox'
import './App.css'
import ColorBoxGrid from './ColorBoxGrid'


const colors=[
"#FF0000",
"#00FF00",
"#0000FF",
"#FFFF00",
"#800080",
"#FFA500",
"#FFC0CB",
"#A52A2A",
"#000000",
"#FFFFFF",
"#808080",
"#00FFFF",
"#FF00FF"


]
function App() {
  
  return (
    <>
      <ColorBoxGrid colors={colors}/>
      
    </>
  )
}

export default App
