import { PixelPainterStore,ChooseColor} from "../stores/PixelPainterStore"
import {useState} from 'react'

type SelectColorButtonProps = {
  color: string;
}

const SelectColorButton = ({ color }: SelectColorButtonProps) => {
  const state = PixelPainterStore.useState()
  //modify this function to highlight correctly
  const computeRingSize = (ColorHighlight: string) => {
    if(ColorHighlight === color)
    
    return "ring-8 ring-green-400"
    else 

    return ""
  }

  return (
    <div className={`${computeRingSize(state.generalColor)} rounded-md border-black border-2 w-12 h-12 cursor-pointer`}
      style={{ backgroundColor: color }} onClick= {e => {ChooseColor(color)}}
    >
    </div>
  
  )
}

export default SelectColorButton