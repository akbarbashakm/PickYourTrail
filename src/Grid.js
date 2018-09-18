import React, { Component } from 'react';
import './response.css';
const GridData = () => {
    return <table style={{ width: "100%" }}>
        <tr>
            <td className='e-cell' style={{ width: "25%" }}>Column1</td>
            <td className='e-cell' style={{ width: "25%" }}>Column2</td>
            <td className='e-cell' style={{ width: "25%" }}>Column3</td>
            <td className='e-cell' style={{ width: "25%" }}>Column4</td>
        </tr>
    </table>;
}
class Grid extends Component {
    render() {
        return (
            <div>
                <h2 style={{ align: 'center' }}>Grid Layout</h2>
                <div id='list' style={{ width: "100%" }}>
                    <table style={{ width: "100%" }}>
                        <tr>
                            <td className='e-cell' style={{ width: "25%" }}>
                                <h5 style={{ textAlign: 'center' }}>Column1</h5>
                                <GridData></GridData>
                            </td>
                            <td className='e-cell' style={{ width: "25%" }}>
                                <h5 style={{ textAlign: 'center' }}>Column2</h5>
                                <GridData></GridData>
                            </td>
                            <td className='e-cell' style={{ width: "25%" }}>
                                <h5 style={{ textAlign: 'center' }}>Column3</h5>
                                <GridData></GridData>
                            </td>
                            <td className='e-cell' style={{ width: "25%" }}>
                                <h5 style={{ textAlign: 'center' }}>Column4</h5>
                                <GridData></GridData>
                            </td>
                        </tr>
                    </table>
                </div>
                <br />
                <div>
                    <b>
                        <p>
                            When resizing the window to 760px 1x4 grid will change to 2x2 flexible grid as responsive.
                            When resizing to 360px it will change 4x1 flexible grid.
                        </p>
                    </b>
                </div>
            </div>
        );
    }
}
export default Grid;