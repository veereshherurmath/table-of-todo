import React from 'react'

function Tablefile({ portfolioData }) {
  return (
    <div className='text-muted'>
      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>Id</th>
            <th scope='col'>Scrip</th>
            <th scope='col' className='text-start'>
              Quantity
            </th>
            <th scope='col'>Price</th>
            <th scope='col'>Average</th>

            <th scope='col'>Return</th>
          </tr>
        </thead>
        {portfolioData &&
          portfolioData.length > 0 &&
          portfolioData.map((data, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <th scope='row'>{index}</th>
                  <td>{data.Scrip}</td>
                  <td className='w-25'>
                    <div>
                      <p className='mb-0 text-start d-flex justify-content-between '>
                        <span className='text-muted '>Quantity</span>{' '}
                        {data.Quantity}
                      </p>
                      <p className='mb-0 text-start d-flex justify-content-between '>
                        <span className='text-muted '>Avg. Cost</span>{' '}
                        {data.Avg_Cost}
                      </p>
                      <p className='mb-0 text-start d-flex justify-content-between '>
                        <span className='text-muted '>Invested Amt</span>
                        {data.Invested_Amount}
                      </p>
                    </div>
                  </td>
                  <td>{data.Price}</td>
                  <td className='w-25'>
                    <div>
                      <p className='mb-0 text-start d-flex justify-content-between '>
                        <sapn className='text-muted'>Market Value </sapn>{' '}
                        {data.Price}
                      </p>
                      <p className='mb-0 text-start d-flex justify-content-between'>
                        <sapn className='text-muted'>
                          % of portfolio vlaue{' '}
                        </sapn>{' '}
                        {data.Portfolio_Value}
                      </p>

                      <progress
                        className='w-100'
                        value={
                          data.Portfolio_Value.replace(/[^a-zA-Z0-9 ]/g, '') /
                          100
                        }
                        max='100'>
                        {data.Portfolio_Value.replace(/[^a-zA-Z0-9 ]/g, '') /
                          100}
                      </progress>
                    </div>
                  </td>
                  <td>{data.Return}</td>
                </tr>
              </tbody>
            )
          })}
        <tbody></tbody>
      </table>
    </div>
  )
}

export default Tablefile
