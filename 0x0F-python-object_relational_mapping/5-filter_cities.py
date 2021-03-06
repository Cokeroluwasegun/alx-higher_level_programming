#!/usr/bin/python3
# Script that lists all states from a database
if __name__ == "__main__":
    import MySQLdb
    from sys import argv
    user = argv[1]
    pwd = argv[2]
    dbname = argv[3]
    statename = argv[4]
    db = MySQLdb.connect(host="localhost", user=user, passwd=pwd, db=dbname)
    cur = db.cursor()
    try:
        cur.execute("SELECT cities.name\
            FROM states INNER JOIN cities ON\
            states.name = '{}' AND\
            states.id = cities.state_id ORDER BY cities.id".format(statename))
        rows = cur.fetchall()
    except MySQLdb.Error as e:
        pass
    for row in rows:
        for col in row:
            print("{}".format(col), end="")
        if (row != rows[len(rows) - 1]):
            print(", ", end="")
    print("")
    cur.close()
    db.close()
