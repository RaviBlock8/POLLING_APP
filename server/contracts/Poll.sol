pragma solidity ^0.6.1;


contract Poll{
    uint total_votes;
    mapping(string=>uint) count;
    address owner;


    modifier onlyOwner{
        require(msg.sender == owner,"only owner can perform this transaction");
        _;
    }
    event voted(
        string idea,
        uint votes
    );

    event votecount(
        string idea,
        uint votes
    );

    constructor(address _owner) public{
        total_votes = 0;
        owner = _owner;
    }

    function giveVote(string memory idea) public{
        count[idea] += 1;
        emit voted(idea,count[idea]);
    }

    function voteCount(string memory idea) public onlyOwner{
        emit votecount(idea,count[idea]);
    }


}