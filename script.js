if("serviceWorker" in navigator){
  navigator.serviceWorker.register("worker.js").then((reg)=>{
    console.log("service worker",reg);
  }).catch(err=>{
    console.log("worker error",err);
  })
}else{
  console.log("Service worker is not available")
}