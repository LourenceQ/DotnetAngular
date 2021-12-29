import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagger',
  templateUrl: './pagger.component.html',
  styleUrls: ['./pagger.component.scss']
})
export class PaggerComponent implements OnInit {
  @Input() totalCount: number;
  @Input() pageSize: number;
  @Output() pageChanged = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }
  onPagerChange(event: any) {
    this.pageChanged.emit(event.page);
  }

}
