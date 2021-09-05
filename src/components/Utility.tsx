import { PixelPainterStore,Clear, getRandom } from "../stores/PixelPainterStore"

const Utility = () => {
  return (
    <div className="flex justify-center space-x-3">
      <button className="w-36" onClick={e => Clear()}>Clear</button>
      <button className="w-36" onClick={e => getRandom()}>Random color</button>
    </div>
  )
}

export default Utility