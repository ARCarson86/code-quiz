import { Component, Input } from '@angular/core';

@Component({
  selector: 'team-member',
  templateUrl: './team-member.component.html',
  styleUrls: ['./team-member.component.scss']
})
export class TeamMemberComponent {
  @Input() url: string;
  @Input() name: string;
}
