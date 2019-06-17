import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  public getGifFromLichess(id: string, reversed: boolean) {
    const params = new HttpParams().set('reversed', reversed.toString())
    return this.http.get(`${this.apiUrl}/api/lichess/${id}`, { params, responseType: 'blob' })
      .toPromise()
      .then(data => {
        return this.createImageFromBlob(data)
      })
  }

  private createImageFromBlob(image: Blob) {
    return new Promise((resolve, reject) => {

      const reader = new FileReader();

      reader.addEventListener('load', () => {
        resolve(reader.result)
      }, false);

      if (image) {
        reader.readAsDataURL(image);
      } else {
        reject('no image')
      }

    })
  }
}
