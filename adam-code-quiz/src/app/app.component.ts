import { Component } from '@angular/core';
import { TeamMemberComponent } from './team-member/team-member.component';
import { QuoteComponent } from './quote/quote.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'adam-code-quiz';
}
