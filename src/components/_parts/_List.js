import React, { Component } from 'react';


class List extends Component {
  render(){
    const { datas, indicator, mode } = this.props;
    let index = mode === 'absolue' ? indicator : indicator+"_relative"
       return ( 
        <>
          <table className="table">
              <thead className="table__head">
                <tr>
                  <td className="table__td"></td>
                  <td className="table__td --align-right">{indicator === 'cases' ? 'Cas' : 'Deces'}</td>
                  {mode ===  'absolue' &&
                    <td className="table__td --align-right"> Cumulatif </td>
                  }
                  </tr>
              </thead>
              <tbody>
              {Object.entries(datas).map(function(d){
                  return (
                    <tr key={d[0]}>
                      <td  className="table__td">{d[1].province_full}</td>
                      <td  className="table__td --align-right">{d[1][index]}</td>
                      {mode === 'absolue' &&
                        <td  className="table__td --align-right">{d[1]['cumulative_'+index]}</td>
                      }
                    </tr>
                  )
              })}
              </tbody>
          </table>
        </>
    )
  }
}
     
export default List;