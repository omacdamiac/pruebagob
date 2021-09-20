import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ENDPOINT_API } from 'src/app/commons/const/endPoints';
import { Items } from 'src/app/commons/models/items';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DatosService {
  constructor(public http: HttpClient) {}

  getList(): Observable<any> {
    let urlData: string = `${environment.urlBase}${ENDPOINT_API.CATALOG}`;
    return this.http.get<any>(urlData, { observe: 'response' }).pipe(
      map((item) => {
        return item['body']['result']['items'];
      }),
      map((e) => {
        return e.map((items: Items, index) => {
          return {
            id: index,
            title: e[index].title,
            _about: e[index]._about,
            accessURL: e[index].accessURL,
          };
        });
      })
    );
  }

}
