import React ,{useState , useEffect}from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

export default function Users() {
    const classes = useStyles();
    const [getDetail, setDetail] = useState([])
    const [getPage, setPage] = useState(1)

    const fetchData=()=>{
        fetch(`https://reqres.in/api/users?page=${getPage}`)
        .then(response => response.json())
        .then(data =>
            {     console.log('dataaaaaa',data)
            setDetail(data.data)
            setPage(data.page)
        }
            )       
    }


    useEffect(()=>{
        fetchData();
    },[getPage])


    const filllItems=()=>{
        return getDetail.map((item)=>{
            return(
                <center>
                   <p class="bg"> <b>User Name :</b>  {item.first_name} </p>  
                </center>
            )
        })
    }

    const handlePage=(opt)=>{
        switch (opt) {
            case 1:
                setPage(1)
                break;

            case 2:
                setPage(2)
        
            default:
                break;
        }
    }

    return (
        <div>
            <h1> Users Details..</h1>
            <h2> Page Of {getPage} </h2>
            <div>
              {filllItems()}
            </div>


            <div className={classes.root} style={{display:'flex',position:'relative',left:500,top:50}}>
            </div>

            <div>
                <button class="button button5" onClick={()=>handlePage(1)}>1</button> 
                <button class="button button5" onClick={()=>handlePage(2)}>2</button> 
            </div>
        </div>
    )
}
