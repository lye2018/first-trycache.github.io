class FastCache{
	constructor(){
		this.list = {}
	}
	set(key,value) {
		this.list[key] = value
	}
	get(key) {
		return this.list[key]
	}
	clear(){
		this.list={}
    }
    thanks(){
        console.log('everything will be ok!');
    }
}
window.FastCache = FastCache