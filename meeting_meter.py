#!/usr/local/bin/python

import time


def main():
    number_attendees = 7
    nomiinal_salary = .75
    total = 0

    while True:
        total += number_attendees * nomiinal_salary
        print "total cost of meeting: $%.2f" % (total, )
        time.sleep(5)


if __name__ == "__main__":
    main()
