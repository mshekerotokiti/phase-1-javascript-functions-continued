function saturdayFun(activity = 'roller-skate'){
return `This Saturday, I want to ${activity}!`
}
saturdayFun();

function mondayWork (activity = 'go to the office'){
    return `This Monday, I will ${activity}.`
}
mondayWork();

function wrapAdjective (wrap = '*'){
    const  innerFunction = function(name = "a hard worker"){
return `You are ${wrap}${name}${wrap}!`;
};
return innerFunction;
    };
