

const deleteBtn = document.getElementById("delete-btn")
const leadsBtn = document.getElementById("input-btn")
const leads = document.getElementById("input-el")
const tabBtn = document.getElementById("tab-btn")
const list = document.getElementById("leads-el")

//const tabs = [ {url: "https://www.linkedin.com/in/per-harald-borgen/"}]
let leadList = []
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("leadList") )





if (leadsFromLocalStorage) {
   leadList = leadsFromLocalStorage
    renderLead(leadList)
}





leadsBtn.addEventListener("keyup", function(event){
   
    if(event.key === 13){
        console.log("enter pressed")
        event.preventDefault();
        leadList.push(leads.value)
    
        leads.value =""
        localStorage.setItem("leadList", JSON.stringify(leadList))
        renderLead(leadListlead)
    }
       
      
})
leadsBtn.addEventListener("click", function(){
    
    
    leadList.push(leads.value)
    
    leads.value =""
    localStorage.setItem("leadList", JSON.stringify(leadList))
    renderLead(leadList)
    
})

tabBtn.addEventListener("click", function(){
   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) 
    {
            console.log(tabs)
            
            leadList.push(tabs[0].url)
    localStorage.setItem("leadList", JSON.stringify(leadList))
    renderLead(leadList)
            
    })


    
})


deleteBtn.addEventListener("click", function(){
    clearLS()
    
})
















    
function renderLead(leads){
    let listItems = ""

    for(let i = 0; i<leadList.length; i++){
        
        //listItems += "<li><a href='"+leadList[i]+"'>" + leadList[i] + "</a></li>"
        listItems += `
        <li>
        <a href='${leads[i]}'>${leads[i]}</a>
        </li>
        `
        
        
         }

        list.innerHTML = listItems }

        
        function clearLS(){
            localStorage.clear();
            leadList =[]
            renderLead(leadList)
            

            
        }