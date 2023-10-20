import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
} from 'recharts';
import { useTheme } from '../theme-provider';
import { cn } from '../../../@/lib/utils';

const RightCharts = () => {
  const {theme} = useTheme();
    const data = [
        {
          name: 'Page A',
          uv: 590,
          pv: 800,
          amt: 1400,
          cnt: 490,
        },
        {
          name: 'Page B',
          uv: 868,
          pv: 967,
          amt: 1506,
          cnt: 590,
        },
        {
          name: 'Page C',
          uv: 1397,
          pv: 1098,
          amt: 989,
          cnt: 350,
        },
        {
          name: 'Page D',
          uv: 1480,
          pv: 1200,
          amt: 1228,
          cnt: 480,
        },
        {
          name: 'Page E',
          uv: 1520,
          pv: 1108,
          amt: 1100,
          cnt: 460,
        },
        {
          name: 'Page F',
          uv: 1400,
          pv: 680,
          amt: 1700,
          cnt: 380,
        },
      ];
  return (
    <div>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke='hsl(var(--primary))' />
          <XAxis dataKey="name" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="amt" fill="hsl(var(--destructive))" stroke="hsl(var(--muted-foreground))" />
          <Bar dataKey="pv" barSize={20} fill='hsl(var(--primary))'stroke='"hsl(var(--secondary))"' />
          <Line type="monotone" dataKey="uv" stroke="hsl(var(--accent-foreground))"/>
          <Scatter dataKey="cnt" fill="hsl(var(--ring))"/>
        </ComposedChart> 
    </div>

         )
}

export default RightCharts