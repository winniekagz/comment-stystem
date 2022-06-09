import React from 'react';


const Contact = () => {
    return (

        <div class="container" style={{color:"white"}}>

            <header class="heading"> Registration-Form</header><hr></hr>

            <div class="row ">

                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="firstname">First Name :</label> </div>
                        <div class="col-xs-8">
                            <input type="text" name="fname" id="fname" placeholder="Enter your First Name" class="form-control " />
                        </div>
                    </div>
                </div>


                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="lastname">Last Name :</label></div>
                        <div class="col-xs-8">
                            <input type="text" name="lname" id="lname" placeholder="Enter your Last Name" class="form-control last" />
                        </div>
                    </div>
                </div>

                <div class="col-sm-12">
                    <div class="row">
                        <div class="col-xs-4">
                            <label class="mail" >Email :</label></div>
                        <div class="col-xs-8"	>
                            <input type="email" name="email" id="email" placeholder="Enter your email" class="form-control" />
                        </div>
                    </div>

                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-xs-4">
                                <label class="pass">Password :</label></div>
                            <div class="col-xs-8">
                                <input type="password" name="password" id="password" placeholder="Enter your Password" class="form-control" />
                            </div>
                        </div>
                    </div>


                    <div class="col-sm-12">
                        <div class="row">
                            <div class="col-xs-4 ">
                                <label class="gender">Gender:</label>
                            </div>

                            <div class="col-xs-4 male">
                                <input type="radio" name="gender" id="gender" value="boy">Male</input>
                            </div>

                            <div class="col-xs-4 female">
                                <input type="radio" name="gender" id="gender" value="girl" >Female</input>
                            </div>

                        </div>
                        <div class="col-sm-12">
                            <div class="btn btn-warning">Submit</div>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default Contact;
