import {Store} from 'pullstate'

type PixelPainterStoreType = {
  //we save painted color as hex code (string) in 2D array
  canvas: string[][],
  generalColor:string 
}

//return an (16 x 16) 2D array filled with "#FFFFFF"
const createEmptyCanvas = () => {
  const output: string[][] = []
  for (let i=0; i<16; i++){
    output[i] = []
    for (let j=0; j<16; j++){
      output[i].push('#FFFFFF')
    }
  }
  return output
}

const RandomColor = () => {
  const output: string[][] = []
  for (let i = 0; i < 16; i++) {
    output[i] = []
    for (let j = 0; j < 16; j++) {
      const num = Math.floor(Math.random()*12)
      if (num === 0)
        output[i].push('#000000')
      else if (num === 1)
        output[i].push('#804000')
      else if (num === 2)
        output[i].push('#FE0000')
      else if (num === 3)
        output[i].push('#FE6A00')
      else if (num === 4)
        output[i].push('#FFD800')
      else if (num === 5)
        output[i].push('#00FF01')
      else if (num === 6)
        output[i].push('#FFFFFF')
      else if (num === 7)
        output[i].push('#01FFFF')
      else if (num === 8)
        output[i].push('#0094FE')
      else if (num === 9)
        output[i].push('#0026FF')
      else if (num === 10)
        output[i].push('#B100FE')
      else if (num === 11)
        output[i].push('#FF006E')
    }
  }
  return output
}

export const PixelPainterStore = new Store<PixelPainterStoreType>({
  canvas: createEmptyCanvas(),
  generalColor:""
})
export const getRandom = () => {
  PixelPainterStore.update(
    s => {s.canvas = RandomColor()}
  )
}

export const Clear = () => {
  PixelPainterStore.update(
  s => {s.canvas = createEmptyCanvas()} 
  )
}
export const ChooseColor = (color: string) => {
  PixelPainterStore.update(
    s => {s.generalColor = color }
  )
}

export const CellColor = (y: number, x: number) => {
  PixelPainterStore.update(
    s => {s.canvas[y][x] = s.generalColor }
  )
}