import { Component, Input } from '@angular/core';

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
	@Input() quote: string;
  @Input() author: string;
  @Input() quoteAlign: string;
}
