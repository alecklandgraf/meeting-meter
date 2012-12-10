#!/usr/local/bin/python
""" meeting_meter.py
    Keeps track of total cost of the meeting as it goes.
    TODO: 1. add logger to keep notes.
          2. add ability to end meeting without ^C
          3. add ability to update nominal salary
"""
import sys
import time
import datetime


def run_meter(number_attendees, nominal_salary=.75, update_interval_seconds=60):
    total = 0
    print "Meeting started at %s" % (datetime.datetime.now(), )
    while True:
        time.sleep(update_interval_seconds)
        total += number_attendees * nominal_salary * update_interval_seconds / 60
        print "total cost of meeting: $%.2f" % (total, )


def main(argv):
    if len(argv) > 0:
        number_attendees = int(argv[0])
        run_meter(number_attendees)
    else:
        print "Missing number of attendees"
        print "Usage: meeting_meter.py [number of attendees]"
        print "Example: meeting_meter.py 7"


if __name__ == "__main__":
    main(sys.argv[1:])
