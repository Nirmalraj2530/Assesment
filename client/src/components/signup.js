import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'; 
import './signup.css';

export default function Signup(){

    const handlesubmit = async(event) => {
        event.preventDefault();

        var datastring = new FormData(event.target);

        var config = {headers : {"enctype" : "multipart/form-data"}};

        
        let role = document.getElementById('role').value;
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let address = document.getElementById('address').value;
        let branch = document.getElementById('branch').value;
        let password = document.getElementById('password').value;

        if(role === '' || role === null){
            alert('choose role');
        }
        else if(name === '' || name === null){
            alert('enter name');
        }
        else if(email === '' || email === null){
            alert('enter email');
        }
        else if(phone === '' || phone === null){
            alert('enter phone');
        }
        else if(address === '' || address === null){
            alert('enter address');
        }
        else if(branch === '' || branch === null ){
            alert('choose branch');
        }
        else if(password === '' || password === null){
            alert('enter password');
        }
        else{
            await axios.post('http://localhost:3004/Signup',datastring,config)
                  .then(function(res){
                    if(res.data.status === 'error'){
                        alert('Error');
                        window.location.reload();
                    }
                    else if(res.data.status === 'Inserted'){
                        alert('Profile Created');
                        window.location.href="./";
                    }
                  })
                  .catch(function(err){
                    alert(err);
                    window.location.reload();
                  })
        }


    }

    return (
        <>
        <div className="container cont">
            <div className="row">
            <div className="col-lg-3">&nbsp;</div>
            <div className="col-lg-6">
            <form onSubmit={handlesubmit}>
            <div className="table-responsive tablebg">
                <table className="table table-bordered tbc">
                    <thead className='Signup'>
                        <tr>
                           
                            <th colSpan={2}>SignUp</th>
                        
                        </tr>
                    </thead>
                        <tbody className='back'>
                        <tr>
                            <td className='roll'>Role Type</td>
                            <td>
                                <select name="role" id="role" className="form-control">
                                    <option value="">--choose--</option>
                                    <option value="m">Manager</option>
                                    <option value="h">HR</option>
                                    <option value="t">TeamLeader</option>
                                    <option value="e">Employee</option>
                                    
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className='roll'>Name</td>
                            <td>
                                <input type="text" name="name" id="name" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td className='roll'>Email Id</td>
                            <td>
                                <input type="email" name="email" id="email" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td className='roll'>Phone</td>
                            <td>
                                <input type="number" name="phone" id="phone" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td className='roll'>Address</td>
                            <td>
                                <input type="text" name="address" id="address" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td className='roll'>Branch</td>
                            <td>
                                <select name="branch" id="branch" className="form-control">
                                    <option value="">--choose--</option>
                                    <option value="Ch">Chennai</option>
                                    <option value="E">Erode</option>
                                    <option value="T">Tirupur</option>
                                    <option value="N">Nagerkovil</option>

                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td className='roll'>Password</td>
                            <td>
                                <input type="password" name="password" id="password" className="form-control"/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/">
                                    <button type="button" name="data_change" id="data_change" className="btn btn-danger">
                                        Sign-in
                                    </button>
                                </Link>
                            </td>
                            <td>
                                <button type="submit" name="data_submit" id="data_submit" className="btn btn-primary algin-items-cen">
                                    Submit
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </form>
            </div>
            <div className="col-lg-3">&nbsp;</div>
            </div>
        </div>
        </>
    )
}