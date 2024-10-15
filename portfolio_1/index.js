console.log("Script running .... ")
document.querySelector('.cross').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click", () =>
{
    console.log('hello');
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo'))
    {
        console.log('hell');
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else
    {
        console.log('hell2');
        document.querySelector('.ham').style.display = 'none'      
        document.querySelector('.cross').style.display = 'inline'
    }
})










