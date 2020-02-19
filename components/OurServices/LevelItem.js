const LevelItem = ({ title, heading }) => {
  return (
    <div class='level-item has-text-centered'>
      <div>
        <p class='title'>{title}</p>
        <p class='heading'>{heading}</p>
      </div>
    </div>
  )
}

export default LevelItem
