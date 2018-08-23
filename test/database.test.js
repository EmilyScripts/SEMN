const test = require("tape");
const runDbBuild = require("../database/db_build");
const queries = require("../src/model/queries/queries");

test("Tape is working", t => {
    t.equal(Math.sqrt(9), 3, "Square root of 9 is 3");
    t.end();
});

test("getFacster can find and return Emily", t => {
    queries.getFacster("apple", (err, res) => {
        const actual = res.rows[0].first_name;
        t.deepEquals(actual, "Emily", "Emily returned on query");
        t.end();
    });
});

test("Steve is not a user - returns false", t => {
    queries.getFacster("Steve", (err, res) => {
        const actual = err;
        t.equal(actual, true, "No result returns error");
        t.end();
    });
});

test("postFacster can add a user", t => {
    const user = {
        username: "pear",
        first_name: "Lies",
        last_name: "Fakeson",
        bio: "Not real",
        cohort: "1",
        picture: "dummy.png",
        github: "dummy",
        password: "$2a10hmsqmbvAqIt5QBM0.EQ7h.PnMOQ4c6yqGCB.o.AhQWfzjbLvp0JJS"
    };
    queries.postFacster(user, (err, res) => {
        const actual = res.rowCount;
        t.equal(actual, 1, "Inserted new row");
        t.end();
    });
});

test("Auth query returns password", t => {
    queries.checkAuth("apple", (err, res) => {
        const actual = res;
        t.equal(
            actual,
            "$2a10hmsqmbvAqIt5QBM0.EQ7h.PnMOQ4c6yqGCB.o.AhQWfzjbLvp0JJS",
            "Password Returned"
        );
        t.end();
    });
});
