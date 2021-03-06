User = require('./user.js');
var debug = require('debug')('teacher')
class Teacher extends User{

    constructor(teacher){
        super(teacher);
    }
    getHomeworks(){
        return Teacher.homeworkCollection
              .find({})
              .toArray();
    }
    addMissions(mission, webClasses){
        return Promise.all(webClasses.map((webClass) => {
            return Teacher.userCollection
            .updateMany({webClass : webClass,
                         missions : {'$ne' : mission.name}}
                     , {"$push":{"missions":mission.name}})
                    .then(() => {
                    return Teacher.userCollection.find({
                        webClass : webClass.grade.toString()
                        + webClass.number.toString(),
                        identity : 'student'
                    }).toArray();
                    })
                    .then((userArray) => {
                        var defaultMissions =  userArray.map((user) => {
                            var defaultMission = {
                            recipient : user.name,
                            name : mission.name,
                            startTime : mission.startTime,
                            deadline : mission.deadline
                            }
                            return defaultMission;
                        })
                        debug('missions', defaultMissions);
                        return Teacher.missionCollection
                            .insertMany(defaultMissions);
                    })
        })).then(() => {
            return {
                publishSuccess : true
            }
        })
    }
    makeHomework(homework){
        return Teacher.homeworkCollection
                      .insertOne(homework);
    }
    deleteHomework(homework){

    }
    getWebClasses(){
        return Teacher.webClassCollection
              .find({})
              .toArray();
    }
    
}


if (typeof module == 'object')
    module.exports = Teacher;
