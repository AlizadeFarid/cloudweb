import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';
import AOS from "aos";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamData: any;
  constructor(
    private teamService: TeamService,
  ) { }

  ngOnInit(): void {
    this.getTeamData();
    AOS.init();
  }

  getTeamData(): void {
    this.teamService.getTeam().subscribe(
      (res: any) => {
        this.teamData = res.data;
      },
      (error) => {
        console.error('Xəta baş verdi:', error);
      }
    );
  }
}
