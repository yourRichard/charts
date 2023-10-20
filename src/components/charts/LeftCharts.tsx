import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const LeftCharts = () => {
     
    const data = [
        {
          name: 'Page A',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div className='mt-10 w-[350px] h-[300px] border border-border ml-10 rounded-2xl'>
      <div className='ml-4 mt-2 '>
        <h3 className='text-ring text-2xl font-bold'>UV/PV Charts</h3>
        <p className='text-primary'>The heat and the traffic have been rapidly increasing last year</p>
      </div>
      <LineChart
          layout="vertical"
          width={280}
          height={200}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <Legend />
          <Line dataKey="pv" stroke="hsl(var(--destructive))"/>
          <Line dataKey="uv" stroke="hsl(var(--primary))" />
        </LineChart>
    </div>
        
       )
}

export default LeftCharts