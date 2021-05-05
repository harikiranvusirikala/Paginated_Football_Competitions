import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class AppService {
  constructor(private http: HttpClient) {}

  get(pageNumber): Observable<any> {
    return this.http.get<any>(
      `https://jsonmock.hackerrank.com/api/football_competitions?page=${pageNumber}`
    );
  }
}
