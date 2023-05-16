interface Props {
  img: string
}

function Project(props: Props) {
  return (
    <div>
      <img src={props.img} alt={props.img} />
    </div>
  )
}

export default Project
