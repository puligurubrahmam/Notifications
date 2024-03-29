const Notification = props => {
  const {children} = props
  return <p>{children}</p>
}

const element = (
  <div className='bg'>
    <h1 className='head'>Notifications</h1>
    <div className='im'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
        className='img1'
      />
      <Notification children='Information Message' />
    </div>
    <div className='sm'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
        className='img1'
      />
      <Notification children='Success Message' />
    </div>
    <div className='wm'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
        className='img1'
      />
      <Notification children='Warning Message' />
    </div>
    <div className='em'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
        className='img1'
      />
      <Notification children='Error Message' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
