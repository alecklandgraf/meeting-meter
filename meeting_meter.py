#!/usr/local/bin/python

import time


def main():
    number_attendees = 7
    nomiinal_salary = .75
    update_interval = 60
    total = 0

    while True:
        total += number_attendees * nomiinal_salary * update_interval / 60
        print "total cost of meeting: $%.2f" % (total, )
        time.sleep(update_interval)


if __name__ == "__main__":
    main()
