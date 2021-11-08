import { Injectable } from '@angular/core';
import {Reminder} from '../Reminder';
import { REMINDERS } from '../default-reminders';
import { Observable, of, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReminderService {
  private reminders: Reminder[];
  private subject = new Subject<any>();

  constructor() { }

  get(): void {
    this.reminders = REMINDERS;
    this.subject.next(this.reminders);
  }

  onGet(): Observable<any> {
    return this.subject.asObservable();
  }

  updateReminderCompleted(reminder: Reminder): void {
    var foundIndex = this.reminders.findIndex(x => x.id == reminder.id);
    this.reminders[foundIndex] = reminder;
    this.subject.next(this.reminders);
  }

  deleteReminder(reminder: Reminder): void {
    var foundIndex = this.reminders.findIndex(x => x.id == reminder.id);
    this.reminders.splice(foundIndex, 1);
    this.subject.next(this.reminders);
  }
}
