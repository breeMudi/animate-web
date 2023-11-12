import breeLogo from '/breemudilogo.svg'

export default function Interface() {
  return (
    <div className='interface'>
      <div>
        <a href="https://breemudi.github.io/time-tracking/" target="_blank" rel="noreferrer">
          <img src={breeLogo} className="logo" alt="bree logo" />
        </a>
      </div>
      <h1>BREE ON 3D</h1>
      <div className="card">
        
      </div>
      <p className="read-the-docs">
        Click on the Bree logo to see previous 2d work
      </p>
    </div>
  )
}

