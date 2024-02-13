import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacementService {
  API="http://localhost:8080";
  public registerPlacement(placementData: any){
    return this.http.post(this.API + '/registerPlacement' , placementData);
  }

  public getPlacement(){
    return this.http.get(this.API+'/getPlacement');
  }

  public deletePlacement(p_companyid:any){
    return this.http.delete(this.API+'/deletePlacement?p_companyid=' + p_companyid);
  }

  public updatePlacement(placement: any){
    return this.http.put(this.API +'/updatePlacement', placement);
  }
  constructor(private http: HttpClient) { }
}
