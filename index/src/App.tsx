import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import TreeItem from '@material-ui/lab/TreeItem';
//import logo from './logo.svg';
import './App.css';
import data, { CatalogEntry } from './data/catalog'

const useStyles = makeStyles({
  root: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
});

function App() {
  const classes = useStyles();

  const renderCatalog = (entry: CatalogEntry) => (
    <TreeItem 
      key={entry.id}
      nodeId={entry.id}
      label={entry.name}
      onClick={(e)=>{entry.link?window.location.href=entry.link:e.preventDefault()}}
    >
      {entry.entry?entry.entry.map((e)=>renderCatalog(e)):null}
    </TreeItem>
  );

  return (
    <div style={{marginTop:'4px', marginLeft: '24px'}}>
      <div style={{width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between'
      }}>
        <img height='50' src='https://cdac.uchicago.edu/wp-content/uploads/2019/09/CDAC_Logo_RGB_v01Full.svg' alt='CDAC' />
        <div style={{
          display: 'flex',
          verticalAlign: 'center',
          textDecoration: 'none',
        }}>
        <p><b>
        <a href='https://github.com/chicago-cdac/resources/blob/master/index/src/data/catalog.tsx'
                  style={{
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: 'black',
                  }}>
            Catalog |
          </a>
        </b></p>
        <a href='https://github.com/chicago-cdac/resources/tree/master/index'>
          <img
            height='50px'
            src='https://cdac-misc.s3.us-east-2.amazonaws.com/images/Ei-sc-github.svg'
            alt='GitHub'
          />
        </a>
        </div>
      </div>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <TreeView
          className={classes.root}
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          defaultExpanded={['root']}
        >
          <TreeItem key={data.id} nodeId={data.id} label={data.name}>
          {data.entry.map((entry: CatalogEntry)=>renderCatalog(entry))}
          </TreeItem>
        </TreeView>
      </div>
    </div>

  );
}

export default App;
