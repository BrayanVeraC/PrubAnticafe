document.addEventListener("click", (e) => {
    const {target} = e;
    if(!target.matches("a")){
        return;
    }

    e.preventDefault();
    urlRoute();
})

const Routes = {
    404:{
        template: "#",
        title: "",
        description: ""
    },
    "/": {
        template: "/app/home/index.html",
        title: "",
        description: ""
    },
    "/galeria": {
        template: "/app/galeria/index.html",
        title: "",
        description: ""
    },
    "/nosotros": {
        template: "/app/nosotros/index.html",
        title: "",
        description: ""
    }
    
}

const urlRoute = (event) => {
    event = event || window.event;
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
    handleLocation();
};

const handleLocation = async () => {
    const path = window.location.pathname;
    if(path.length === 0) {
        path = "/";
    }
    const route = Routes[path] || Routes [404];
    const html = await fetch(route.template).then((response) => response.text());
    document.getElementById("app-root").innerHTML = html;
};

window.onpopstate = handleLocation;
window.route = urlRoute;
handleLocation();