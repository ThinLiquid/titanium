import { MaterialSymbol } from "material-symbols";

const Icon = (props: { name: MaterialSymbol, size?: number, fill?: boolean }) => {
  if (!props.size) props.size = 24;
  if (!props.fill) props.fill = false

  return <i
    class='material-symbols-sharp'
    style={`
      display: block;
      font-variation-settings: 'FILL' ${props.fill ? 1 : 0}, 'wght' 200, 'GRAD' 5, 'opsz' ${props.size};
      font-size: ${props.size}px;   
    `}
  >{props.name}</i> 
}

export default Icon
