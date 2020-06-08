import React from 'react';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import CopyToClipboard from 'react-copy-to-clipboard';
import WeblinkIcon from './weblinkicon'

class RefURLs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching : false,
        urls : props.urls,
        tags : [],
      };
      this.snackBarHandle = props.snackBarHandle.bind(this);
    }
  
    componentDidMount() {
      console.log("componentDidMount")
      this.initUrls()
    }
  
    static getDerivedStateFromProps(props, state) {
      console.log('getDerivedStateFromProps')
      return state
    } 
  
    componentWillUnmount() {
      console.log("componentWillUnmount")
    }
    componentDidUpdate () {
      console.log("componentDidUpdate")
    }
    
    fetchTags(rec) {
      var dict = {}
      dict.rec = rec
      dict.title = ''
      dict.url = rec.url
      dict.image = rec.image
      if (rec.authors)
        dict.authors = rec.authors
      if (rec.publisher)
        dict.publisher = rec.publisher
      if (rec.locdate)
        dict.locdate = rec.locdate
      if (rec.metatags_enable) {
        console.log("fetchTags W metatags")
        dict.title = rec.metatags_title
        dict.description = rec.description
        dict.metatags_url = rec.metatags_url
        dict.metatags_title = rec.metatags_title
        dict.metatags_description = rec.metatags_description
        dict.metatags_image = rec.metatags_image
        dict.description = rec.metatags_description
        dict.image = rec.metatags_image
      }
      else {
        console.log("fetchTags NO metatags")
        dict.title = rec.title
        dict.description = rec.description
        if (dict.description === undefined)
           dict.description = ''
        if (dict.image === undefined)
           dict.image = ''
      }
      return dict
    }
  
    //TODO: this assumes cors enabled / Access-Control-Allow-Origin: *
    async initUrls(){
      console.log("initUrls")
      Promise.all(this.state.urls.primary.map(this.fetchTags)).then(d => {
        this.setState({tags: this.state.tags.concat(d)})
        Promise.all(this.state.urls.secondary.map(this.fetchTags)).then(d => {
          this.setState({tags: this.state.tags.concat(d)})
        }).catch(e=>console.log(e))
      }).catch(e=>console.log(e))
    }
  
    getTableScrollHead(i, type, k) {
      return (
        <TableHead key={("h_"+k+"_"+i)} style={{backgroundColor: "lightgray"}}>
          <TableRow key={("h_"+k)+"_"+i}>
              <TableCell key={("h_"+k+"_"+i)}>
              {type}
              </TableCell>          
          </TableRow>                        
        </TableHead>
      );
    }
    //TODO better var names
    getTableScrollRow(i, j, e1, isURL) {
      //<Img src={e1} sty le={{maxWidth: 500}}></Img> //TODO magic style numbers
      return (
        <TableRow key={("r_"+j+"_"+i)}>
          <TableCell key={("r_"+j+"_"+i)}>
              {(isURL)?(()=>{
                return (
                    <div style={{display: 'flex', verticalAlign: 'middle'}}> 
                      <CopyToClipboard
                          onCopy={(e)=>this.snackBarHandle(e)}
                          text={e1}
                      >
                          <WeblinkIcon style={{ marginRight: '3px', marginTop: '3px' }} />
                      </CopyToClipboard>
                      <a href={e1}>{e1}</a>
                    </div>
                )
                })():e1}
          </TableCell>
        </TableRow>
      );
    }
  
    getTableScrollRowImageDesc(i, img, desc) {
      return (
        <TableRow key={("rf_"+i)}>
          <TableCell key={("rf_"+i)}>
               {(()=>{
                 var image = (<></>)
                 if (img !== undefined && img !== '') {
                  image = (
                    <img 
                      src={img}  //TODO check image in
                      alt={desc} //TODO alt
                      style={{maxWidth: 500, maxHeight: 100, float: "left", marginRight: 10}} 
                      /*crossOrigin={''}*/
                    />
                  )
                 }
                 return ( //TODO get rid of magic numbers
                  <div>
                    {image}
                    <p style={{marginLeft: 10, textAlign: 'center', fontStyle: 'italic'}}>{desc}</p>
                  </div>
                 )
               })()}
          </TableCell>
        </TableRow>
      );
    }
  
    getTableScrollBody(i, o) {
      var tags = ['title', "authors", 'publisher', 'locdate', 'url']
      return (
        <TableBody key={("b"+i)}> 
          {[(()=>{
            return Object.entries(o).map((e, j) => {
              //console.log(e[0])
              if (tags.includes(e[0]) && typeof e[1] === 'string' && e[1] !== '') {
                console.log(e[1])
                return this.getTableScrollRow(i, j, e[1], e[0]==='url')
              } else {
                console.log("getTableScrollBody skipping " + e[0] + " with " + e[1])
              }
              return null
            }) 
          })(), (o['description'] !== '')?this.getTableScrollRowImageDesc(i, 
                  o['image'],
                  o['description']
                ):null]}
        </TableBody>
      );
    }
    render () {
      //{/*<div>{JSON.stringify(this.state.tags)}</div>*/}
      //https://stackoverflow.com/questions/35136836/react-component-render-is-called-multiple-times-when-pushing-new-url
      return (
           <div>
              {
                this.state.tags.map((tag, i) => {
                var o = tag
                return(
                    <TableContainer 
                      component={Paper}
                      key={("hb"+i)}
                      style={{ maxWidth: 560, marginTop: 20, marginBottom: 5 }}
                    > 
                      <Table size="small" key={("hb_"+o.rec.url+"_"+i)}>
                        {this.getTableScrollHead(i, o.rec.type, o.rec.url)}
                        {this.getTableScrollBody(i, o)}
                      </Table>
                    </TableContainer>
                  );
                })
              }
           </div>
      )
    }
  }

  export default RefURLs;