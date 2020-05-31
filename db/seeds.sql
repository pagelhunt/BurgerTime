USE burgerTime-db;

INSERT INTO burgers
    (burger_name, devoured)
VALUES
    ("All am-er-rican", false),
    ("Ez pz double beef baby Burger", false),
    ("YOU GOT THE Burger", true),
    ("Shack Burger", false);

SELECT *
FROM burgers