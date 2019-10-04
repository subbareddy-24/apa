import { Injectable, Component, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { FileInfo } from './file.js';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  fileData: FileInfo[];
  private serviceUrl = 'assets/mock-data/dashboard/';  // URL to web api

  constructor(private httpClient: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, rstate: RouterStateSnapshot): Observable<FileInfo[]> {
    const code = route.params['code'];
    console.log('Code :: ' + code);
    return this.getFiles(code);
  }

  public getFiles(code): Observable<FileInfo[]> {
    // Picking the correct JSON based on the RootCode/FileName
    const urlString = this.serviceUrl + (!code ? 'COE' : code) + '.json';
    return this.httpClient.get<FileInfo[]>(urlString).pipe(
      tap(_ => console.dir(_))
    );
  }

  printError(errorMsg): void {
    console.log(errorMsg);
  }
}
