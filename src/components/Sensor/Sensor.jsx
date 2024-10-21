import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


export default function Sensor({data}){
    return (
        <LineChart
          width={500}
          height={300}
          data={data}
          
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
  
          
          <Line 
          type="monotone" 
          dataKey="value" //valor
          stroke='blue' //cor da linha
          activeDot={{r:6}} //tamanho da ponto
          
          />
          <Line type="monotone" />
        </LineChart>
   
    );
  }
