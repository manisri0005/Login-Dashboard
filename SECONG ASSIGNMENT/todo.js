                                
                                function allowDrop(ev) {
                                ev.preventDefault();
                                }

                                function drag(ev) {
                                ev.dataTransfer.setData("text", ev.target.id);
                                }

                                function drop(ev) {
                                ev.preventDefault();
                                var data = ev.dataTransfer.getData("text");
                                ev.target.appendChild(document.getElementById(data));
                                alert("one todo completed sucessfully !");
                                var col=document.getElementById("drag1");
                                col.style.color = "white";
                                col.style.backgroundColor= "green";
                                col.style.border="1px solid black";
                                col.style.height="35px";
                                col.style.width="100px";
                                col.style.padding="10px";
                                }

                                function drop1(ev) {
                                ev.preventDefault();
                                var data = ev.dataTransfer.getData("text");
                                ev.target.appendChild(document.getElementById(data));
                                alert("one todo is pending !");
                                var col2=document.getElementById("drag1");
                                col2.style.color = "white";
                                col2.style.backgroundColor= "red";
                                col2.style.border="1px solid black";
                                col2.style.height="35px";
                                col2.style.width="100px";
                                col2.style.padding="10px";
                                }

                                function d(ev) {
                                ev.preventDefault();
                                var data = ev.dataTransfer.getData("text");
                                ev.target.appendChild(document.getElementById(data));
                                // alert("to do is deleted ");
                                var del=document.getElementById("drag1");
                                del.style.color="red";
                                del.style.display="none";
                                let popup= document.getElementById('popup');
                                popup.classList.add("open-popup");
                                }

                                function togglepopup(){
                                    document.getElementById("popup-1").classList.toggle("active");
                                }

                                function closepopup(){
                                    let popup= document.getElementById('popup');
                                    popup.classList.remove("open-popup");
                                }
                                function col(ev){
                                    let popup= document.getElementById('cs');
                                    popup.classList.add("open-popup");
                                }
                                function col1(){
                                    let popup= document.getElementById('cs');
                                    popup.classList.remove("open-popup");
                                }
                                // function c(ev){
                                //     let cus=document.getElementById('cf1');
                                //     cus.ontoggleclass("active");
                                // }
                                // $(".menu > ul > li").click(function(e){

                                //     $(this).siblings().removeClass("active");
                                //     $(this).toggleClass("active");
                                //     $(this).find("ul").slideToggle();
                                // });



                                function change(){
                                var che=document.getElementById('tdkhg');
                                var sche=document.getElementById('navcol')
                                che.style.background="#8e44ad";
                                sche.style.background="#8e44ad";
                                }

                                function change1(){
                                    var che1=document.getElementById('tdkhg');
                                    var sche1=document.getElementById('navcol')
                                    che1.style.background="#2980b9";
                                    sche1.style.background="#2980b9";
                                    }
                                function change2(){
                                    var che2=document.getElementById('tdkhg');
                                    var sche2=document.getElementById('navcol')
                                    che2.style.background="#27ae60";
                                    sche2.style.background="#27ae60";
                                    }
                                function change3(){
                                    var che3=document.getElementById('tdkhg');
                                    var sche3=document.getElementById('navcol')
                                    che3.style.background="#eb0578";
                                    sche3.style.background="#eb0578";
                                    }
                                function change4(){
                                    var che4=document.getElementById('tdkhg');
                                    var sche4=document.getElementById('navcol')
                                    che4.style.background="#fbff04";
                                    sche4.style.background="#fbff04";
                                    }
                                function change5(){
                                    var che5=document.getElementById('tdkhg');
                                    var sche5=document.getElementById('navcol')
                                    che5.style.background="#3002fc";
                                    sche5.style.background="#3002fc";
                                    }
                                function change6(){
                                    var che6=document.getElementById('tdkhg');
                                    var sche6=document.getElementById('navcol')
                                    che6.style.background="#f00303";
                                   sche6.style.background="#f00303";
                                    }
                                function change7(){
                                    var che7=document.getElementById('tdkhg');
                                    var sche7=document.getElementById('navcol')
                                    che7.style.background="#3bec05";
                                    sche7.style.background="#3bec05";
                                    }
                                                            // window.onclick = function(event) {
                                                            //     if (event.target == vp) {
                                                            //         vp.style.display ='none';
                                                            //     }
                                                            //   }
                                let bts=document.getElementsByClassName("theme-buttons")
                                for(let i=0;i<bts.length;i++){
                                    bts[i].addEventListener("click",function(){
                                    let co=getComputedStyle(this)
                                    let l=co["backgroundColor"]
                                    document.body.style.backgroundColor=l;
                                });
                                }
                                function allowDrop(event) {
                                event.preventDefault();
                                }
                                function openForm() {
                                    document.getElementById("myForm").style.display = "block";
                                  }

                                  
                                function displayResult() {
                                    var table=document.getElementById("table");
                                    // alert(ins);
                                    var row=table.insertRow(0);
                                    // alert(ins1);
                                    var cell1=row.insertCell(0);
                                    // alert(ins2);
                                    var cell2=row.insertCell(1);
                                    // alert(ins3);
                                    var cell3=row.insertCell(2);
                                    var cell4=row.insertCell(3);
                                    
                                        
                                    // alert(ins2);
                                    cell1.innerHTML=document.getElementById('fn').value;
                                    cell2.innerHTML=document.getElementById('ln').value;
                                    cell3.innerHTML=document.getElementById('dn').value;
                                    cell4.innerHTML='<button onclick="editData(this)">Edit</button>'+ 
                                    '<button onclick="deleteData(this)">Delete</button>';
                                    
                                }
                                function removeResult(){
                                    document.getElementById("table").deleteRow(0);
                                }
                                function editData(button) { 
			
                                    // Get the parent row of the clicked button 
                                    let row = button.parentNode.parentNode; 
                                    
                                    // Get the cells within the row 
                                    let nameCell = row.cells[0]; 
                                    let emailCell = row.cells[1]; 
                                    let mobileCell = row.cells[2]; 
                                    let addressCell = row.cells[3]; 
                                    
                                    // Prompt the user to enter updated values 
                                    let nameInput = 
                                        prompt("Enter the firstname:", 
                                            nameCell.innerHTML); 
                                    let emailInput = 
                                        prompt("Enter the lastname :", 
                                            emailCell.innerHTML); 
                                    let numberInput = 
                                        prompt("Enter the updated desgination:", 
                                            mobileCell.innerHTML 
                                        );  
                                    // Update the cell contents with the new values 
                                    nameCell.innerHTML = nameInput; 
                                    emailCell.innerHTML = emailInput; 
                                    mobileCell.innerHTML = numberInput; 
                                    addressCell.innerHTML = addressInput; 
                                } 
                                function deleteData(button) { 
                                    
                                    // Get the parent row of the clicked button 
                                    let row = button.parentNode.parentNode; 
                        
                                    // Remove the row from the table 
                                    row.parentNode.removeChild(row); 
                                } 
                                function clearInputs() { 
                                    
                                    // Clear input fields 
                                    document.getElementById("nameInput").value = ""; 
                                    document.getElementById("emailInput").value = ""; 
                                    document.getElementById("numberInput").value = ""; 
                                    document.getElementById("addressInput").value = ""; 
                                } 

                                

                            