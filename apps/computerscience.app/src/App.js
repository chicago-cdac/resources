/**
 * Base App.js file case be used as a template for new
 * datatable search applications.
 */

import React from 'react';
import './App.css';
//TODO: TypeScript
import IconSearch from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import DataTable from 'react-data-table-component';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import data from './data/Datasets.js';
import RefURLs from './components/refurls'
import ExpansionPanel from './components/expansionpanel'

const columns = [
  {
    name: 'Title',
    selector: 'title',
    sortable: true,
    maxWidth: '260px',
  },
  {
    name: 'Description',
    selector: 'shortdesc',
    sortable: true,
  },
  /** Add relevant data to Datatable here */
  /*{
    name: 'Start',
    selector: 'datestart',
    sortable: true,
    maxWidth: '8px',
  },
  {
    name: 'End',
    selector: 'dateend',
    sortable: true,
    maxWidth: '8px',
  },
  {
    name: 'Size',
    selector: 'compressedsize',
    sortable: true,
    maxWidth: '8px',
  },*/
  {
    name: 'Key Words',
    selector: 'keywords',
    sortable: true,
    minWidth: '300px',
  }

];

//const altURLbase = "https://.s3.us-east-2.amazonaws.com/images/"

const paginationOptions = { rowsPerPage: 20 };

/*const SimpleMediaQuery = ({}) => {
  const matches = useMediaQuery('(min-width:600px)');
  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
}*/

const FilterField = ({ filterText, onFilter, onClear }) => (
  <>
      <TextField 
        id="outlined-basic"
        //label="Search"
        variant="outlined"
        size="small"
        style={{ margin: '5px' }}
        placeholder="Search"
        value={filterText}
        onChange={onFilter}
      />
      <IconSearch style={{ margin: '5px' }} color="action" />
      <Button 
        type="reset"
        variant="contained"
        onClick={onClear}
      >
          Clear
      </Button>
  </>
);


function App() {
  const [refurls, setRefURLs] = React.useState('');
  const [openModalImage, setOpenModalImage] = React.useState(false);
  const [openModalInfo, setOpenModalInfo] = React.useState(false);
  const [filterText, setFilterText] = React.useState('');
  const filteredData = data.filter( i => i.title && (
                                         i.title.includes(filterText) ||
                                         i.shortdesc.includes(filterText) ||
                                         i.keywords.includes(filterText)
                                        )
                                  );

  //const myRef = React.useRef()
  const handleClick = () => {
    setOpenModalImage(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenModalImage(false);
  };

  function openModal(refurls) {
    setRefURLs(refurls)
    setOpenModalInfo(true);
  }
 
  function closeModalInfo(){
    setOpenModalInfo(false);
  }

  /*const moreInfoStyles = {
    content : {
      //top                   : '50%',
      //left                  : '50%',
      //right                 : 'auto',
      //bottom                : 'auto',
      //marginRight           : '-50%',
      //transform             : 'translate(-50%, -50%)'
      //marginRight           : '-50%',
      //maxWidth: "120px",
    }
  };*/

  return (
    <div className="App">
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={openModalImage}
        autoHideDuration={6000}
        onClose={handleClose}
        message="URL Copied."
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
      <DataTable
        title="Datasets"
        columns={columns}
        data={filteredData}
        defaultSortField="title"
        selectableRows={false}
        selectableRowsNoSelectAll={false}
        selectableRowsHighlight={true}
        selectableRowsVisibleOnly={false}
        expandableRows={true}
        expandOnRowClicked={true}
        highlightOnHover={true}
        striped={true}
        pointerOnHover={false}
        dense={true}
        noTableHead={false}
        persistTableHead={false}
        //progressPending={loading}
        noHeader={true}
        subHeader={true}
        subHeaderComponent={
          (
            <div style={{width: '100%', 
                         display: 'flex',
                         flexWrap: 'wrap',
                         justifyContent: 'space-between'
            }}>
              <img height='50' src='https://cdac.uchicago.edu/wp-content/uploads/2019/09/CDAC_Logo_RGB_v01Full.svg' alt='CDAC' />
              <div style={{ display: 'flex', alignItems: 'center', minWidth: '100'}}>
                <FilterField 
                  onFilter={e => setFilterText(e.target.value)}
                  onClear={() => setFilterText("")}
                  filterText={filterText} 
                />
              </div>
              <div style={{
                display: 'flex',
                verticalAlign: 'center',
                textDecoration: 'none',
              }}>
              <p><b>
              <a href='https://github.com/chicago-cdac/resources/tree/master/apps/computerscience.app/src/data' 
                        style={{
                          alignItems: 'center',
                          textDecoration: 'none',
                          color: 'black',
                        }}>
                  Computer Science |
                </a>
              </b></p>
              <a href='https://www.github.com/chicago-cdac/resources/tree/master/apps/computerscience.app'>
                <img 
                  height='50px'
                  src='https://cdac-misc.s3.us-east-2.amazonaws.com/images/Ei-sc-github.svg'
                  alt='GitHub'
                />
              </a>
              </div>
            </div>
          )
        }
        subHeaderAlign={'center'}
        fixedHeader={false}
        pagination={true}
        paginationComponentOptions={paginationOptions}
        //fixedHeaderScrollHeight="300px"
        //direction={directionValue}
        expandableRowsComponent={<ExpansionPanel 
            snackBarHandle={handleClick}
            moreInfoHandle={openModal} 
          />}
      />
      <Modal
        open={openModalInfo}
        onClose={closeModalInfo}
        //style={moreInfoStyles}
        //contentLabel="More Information"
        center
      >
        <RefURLs urls={refurls} snackBarHandle={handleClick} />
        <Button variant="contained" onClick={closeModalInfo}>Close</Button>
      </Modal>
    </div>
  );
}

export default App;
