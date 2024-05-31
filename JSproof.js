const store_NFT=[]
function Create_NFT (_name, _salary,_id,_SCoin) {
    const NFT={
        "Name": _name,
        "salary": _salary,
        "Id":_id,
        "SCoin":_SCoin
    }
    store_NFT.push(NFT);
    console.log("NFT created "+_name);
}
function list_NFT () {
    for(let i=0;i<store_NFT.length;i++){
        console.log(store_NFT[i]);
    }
}
function getTotalSupply() {
    console.log("Total no. of NFT: "+store_NFT.length);
}
Create_NFT("Lucy",70000,21,2.78);
Create_NFT("Max",63000,27,5.21);
Create_NFT("Brian",85000,17,3.55);
list_NFT();
getTotalSupply();