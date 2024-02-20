/*
    As of 2024/2/16, this tutorial isn't working to connect to MongoDB without further research on how to connect properly
*/

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground', {
    bufferCommands: false,
    serverSelectionTimeoutMS: 5000
}).then(() => { console.log('Connected to MongoDB...'); })
  .catch(err => console.log(`Couldn't connect to MongoDB ${err}`));

const courseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    category: {
        type: String,
        required: true,
        enum: ['web', 'mobile', 'network'],
        lowercase: true,
        trim: true
    },
    author: String,
    tags: {
        type: Array,
        validate: {
            isAsync: true,
            validator: function(v, callback) {
                setTimeout(() => {
                    const result = v && v.length > 0;
                    callback(result);
                }, 4000);
            },
            message: "A course should have at least one tag"
        }
    },
    date: { type: Date, default: Date.now },
    isPublished: Boolean,
    price: {
        type: Number,
        required: function() {
            return this.isPublished;
        },
        min: 10,
        max: 200,
        get: v => Math.round(v),
        set: v => Math.round(v)
    }
});

const Course = mongoose.model('Course', courseSchema);

const createCourse = async () => {
    const course = new Course({
        name: 'Angular Course',
        category: 'Web',
        author: 'Mosh',
        tags: ['angular', 'frontend'],
        isPublished: true,
        price: 15
    });

    try{
        const result = await course.save();
        console.log(result);
    }catch (ex){
        for (field in ex.errors)
            console.log(ex.errors[field].message);
    }
};

//createCourse();

const getCourses = async () => {
    /*  eq (equal)
        ne (not equal)
        gt (greater than)
        gte (greater than equal)
        lt (less than)
        lte (less than equal)
        in
        nin (not in)
        or
        and */

    const courses = await Course
        //.find({ price: { $gt: 10, $lte: 20 } })
        //.find({ price: { $in: [10, 15, 20] } })
        // .find()
        // .or([ {author: 'Mosh'}, {isPublished: true} ])
        .find({author: 'Mosh', isPublished: true})
        .limit(10)
        .sort({ name: -1 })
        .select({ name: 1, tags: 1 });
    console.log(courses);
};

//getCourses();

const updateCourse = async (id) => {
    // Approach: Query first
    const course = await Course.findById(id);
    if (!course) return;
    // Version 1
    course.isPublished = true;
    course.author = 'Another Author';
    // // Version 2
    // course.set({
    //     isPublished: true,
    //     authoer: 'Another Author'
    // });

    const result = await course.save();
    console.log(result);
}

//updateCourse('2k2lkcoisd90');

// Approach: Update first
const updateCourse2 = async (id) => {
    const course = await Course.findByIdAndUpdate(id, {
        $set: {
            author: 'Andrew',
            isPublished: false
        }
    }, {
        new: true
    });
    console.log(course);

}

//updateCourse2('dkskalksdjflksjldio');

const removeCourse = async (id) => {
    const result = await Course.deleteMany({ _id: id }); // Or deleteOne
    const course = await Course.findByIdAndDelete(id);
    console.log(result);
}

//removeCourse('dkskalksdjflksjldio');
