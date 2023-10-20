import LeftCharts from '../../charts/LeftCharts'
import RightCharts from '../../charts/RightCharts'

const Charts = () => {
  return (
    <div>
        <div className='flex gap-10'>
            <LeftCharts />
            <RightCharts/>
        </div>
    </div>
  )
}

export default Charts