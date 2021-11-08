import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Reminder } from '../../Reminder';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reminder-item',
  templateUrl: './reminder-item.component.html',
  styleUrls: ['./reminder-item.component.css']
})
export class ReminderItemComponent implements OnInit {
  @Input() reminder: Reminder;
  @Output() onToggleCompleted: EventEmitter<Reminder> = new EventEmitter();
  @Output() onDeleteReminder: EventEmitter<Reminder> = new EventEmitter();
  faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onToggle(reminder: Reminder) {
    this.onToggleCompleted.emit(reminder);
  }

  onDelete(reminder: Reminder) {
    this.onDeleteReminder.emit(reminder);
  }
}
