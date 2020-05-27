import React from 'react';
import styled from 'styled-components';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Paper from '@material-ui/core/Paper';
import CopyToClipboard from 'react-copy-to-clipboard';
import ModalImage from 'react-modal-image';
import WeblinkIcon from './weblinkicon'
import Button from '@material-ui/core/Button';

const CardInfoLink = styled.div`
  display: flex;
  vertical-align: middle,
`;

const ExpansionStyle = styled.div`
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0;
  p {
    font-size: 16px;
    font-weight: 700;
    word-break: break-all;
  }
`;

class ExpansionPanel extends React.Component {
  constructor(props) {
    super(props);
    this.data = props.data;
    this.snackBarHandle = props.snackBarHandle.bind(this);
    this.moreInfoHandle = props.moreInfoHandle.bind(this);
  }

  card1Style =  {
    maxWidth: 350,
    minWidth: 300,
    margin: 0,
  };
  
  card2Style = {
    fontSize: "14px !important",
    marginLeft: 10,
    width: '100%'
  };
  
  cardInfoStyle = {
    fontSize: "14px !important",
    textAlign: 'left',
  };

  render () {
    return (
      <div style={{display: 'flex', alignItems: 'left'}}>
      <ExpansionStyle >
        <Card style={this.card1Style}>
          <CardContent>
              <ModalImage
                small={this.data.images[0]}
                large={this.data.images[0]}
                hideDownload={true}
                hideZoom={true}
              />
          </CardContent>
          <CardContent style={this.cardInfoStyle}>
            <b>Name:</b> <i>{this.data.title}</i> <br />
            <b>Description:</b> <i>{this.data.description}</i> <br />
            <b>Key Words: </b> <i>{this.data.keywords}</i>
          </CardContent>
        </Card>
              <div>
                <TableContainer style={this.card2Style} component={Paper}> {/*component={Paper}*/}
                  <Table style={this.cardInfoStyle} size="small">
                    <TableBody>
                      <TableRow>  
                          <TableCell>
                            <CardInfoLink>
                              <CopyToClipboard
                                onCopy={(e)=>this.snackBarHandle(e)}
                                text={this.data.refurls.primary[0].url}>
                                <WeblinkIcon 
                                  style={{ marginRight: '3px', marginTop: '3px' }}
                                />
                              </CopyToClipboard>
                              <a href={this.data.refurls.primary[0].url}>
                                  {this.data.refurls.primary[0].url}
                              </a>
                            </CardInfoLink>
                          </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                        <CardInfoLink>
                          <CopyToClipboard
                                onCopy={(e)=>this.snackBarHandle(e)}
                                text={this.data.sampledataurl}>
                                <WeblinkIcon 
                                  style={{ marginRight: '3px' , marginTop: '3px' }}
                                  /*onClick={()=>{alert('test')}}*/
                                />
                          </CopyToClipboard>
                          <a href={this.data.sampledataurl}><i>{this.data.sampledataurl}</i></a>
                          <span style={{marginLeft: '6px'}}></span>(Data Sample)
                          </CardInfoLink>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <b>Size:</b> <i>{this.data.compressedsize},<span> </span>
                          {this.data.uncompressedsize}</i> (uncompressed),<span> </span>
                          <b>Formats:</b> <i>{this.data.formats}</i>.
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <b>Interval:</b> <i>From {this.data.datestart} to {this.data.dateend}
                          {this.data.dateapprox?' (approximately)':''}.</i>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <b>Contact:</b> <i>{this.data.contact}</i>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell> {/*style={{border: '1px solid black'}}*/}
                          <Button variant="contained" onClick={() => this.moreInfoHandle(this.data.refurls)}>More Info</Button>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
      </ExpansionStyle>
      </div>
    );//return
  }//render
}//ExpansionPanel

export default ExpansionPanel;