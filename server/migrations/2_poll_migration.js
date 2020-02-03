const Poll=artifacts.require('Poll')

module.exports=(deployer)=>{
    deployer.deploy(Poll)
}