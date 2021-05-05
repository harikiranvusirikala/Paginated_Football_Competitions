import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { AppService } from "../app.service";

interface Competition {
  name: string;
  country: string;
  year: number;
  winner: string;
  runnerup: string;
}

interface ApiResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Competition[];
}

@Component({
  selector: "football-competitions",
  templateUrl: "./footballCompetitions.component.html",
  styleUrls: ["./footballCompetitions.component.scss"],
})
export class FootballCompetitions implements OnInit {
  constructor(private appService: AppService, private http: HttpClient) {}

  total_pages: any;
  data: any;

  arr = [];

  ngOnInit() {
    this.appService.get(1).subscribe((data) => {
      this.total_pages = data.total_pages;
      this.data = data.data;

      for (var i = 1; i <= this.total_pages; i++) {
        this.arr.push(i);
      }
    });
  }

  display(page) {
    this.appService.get(page).subscribe((data) => {
      this.data = data.data;
    });
  }
}
