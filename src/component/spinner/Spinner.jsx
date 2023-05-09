import './spinner.scss'

function Spinner  () {
return(
<div className='Spinner'>
    <div className='spinner-rotate'>
        <div className='part part-1' />
        <div className='part part-2' />
        <div className='part part-3' />
        <div className='part part-4' />
    </div>
</div>
)
}

export {Spinner};   