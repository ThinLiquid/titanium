import { MaterialSymbol } from "material-symbols";
import Icon from "./Icon";
import layers from '../Layers.module.css'


const IconButton = (props: { name: MaterialSymbol, size?: number, radius?: string, props?: any }) => {
  if (!props.size) props.size = 24;
  if (!props.props) props.props = {}
  if (!props.radius) props.radius = '50%'

  return <button {...props.props} class={layers.reactive} style={{
    height: '100%',
    "aspect-ratio": '1/1',
    padding: '4px',
  border: 'none',
  background: 'transparent',
  display: 'flex',
  color: 'inherit',
  'align-items': 'center',
  'justify-content': 'center',
  'flex-shrink': 0,
  'border-radius': props.radius
  }}>
    <Icon name={props.name} size={props.size} />
  </button>
}

export default IconButton
