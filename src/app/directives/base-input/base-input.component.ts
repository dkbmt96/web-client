import { Component, OnInit, Input, HostBinding, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'base-input',
  templateUrl: './base-input.component.html',
  styleUrls: ['./base-input.component.scss']
})
export class BaseInputComponent implements OnInit {
  @Output() change = new EventEmitter();
  @Input() type = 'text';
  @Input() id = '';
  @Input() align = 'left';
  @Input() errMess = '';
  @Input() msg = '';
  @Input() isValid: true;

  @HostBinding('class.invalid') get invalid() {
    return !this.isErrEmpty;
  }
  constructor() { }

  _change = (_: any) => {};

  ngOnInit() {
  }

  triggerChange(value) {
    this._change(value);
    this.change.emit(value);
  }

  onInput(e, type) {
    // console.log('-----' + type + e.target.value);
    this.triggerChange(e.target.value);
  }

  get isErrEmpty() {
    if (this.isValid) {
      return true;
    }
    const m = this.msg_temp;
    return m === null || m === '';
  }

  get msg_temp() {
    if (this.msg === null || this.msg === '') {
      return this.errMess;
    }
    return this.msg;
  }
}
