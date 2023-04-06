import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ Product} from'./product';

@Injectable({
  providedIn: 'root'
})
export class CrudserviceService {

  constructor(private _http:HttpClient) { }

  fetchProductListFromRemote():Observable<any>{
    return this._http.get<any>("http://localhost:8085/getproductlist");
  }

  addproductToRemote( product : Product):Observable<any>{
  return this._http.post<any>("http://localhost:8085/addproduct", product);
  }

  fetchProductByidFromRemote(id : number):Observable<any>{
    return this._http.get<any>("http://localhost:8085/getproductbyid/"+id);
  }
  deleteProductByidFromRemote(id : number):Observable<any>{
    return this._http.get<any>("http://localhost:8085/deleteproductbyid"+id);}
}
