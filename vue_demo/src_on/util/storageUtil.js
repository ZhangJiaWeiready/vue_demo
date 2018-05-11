const key = 'todo_Key'
export default {

  getStorge (){
    return JSON.parse(localStorage.getItem(key) || "[]")
  },
  saveStorge (val){
    return  localStorage.setItem(key,JSON.stringify(val))
  }

}
