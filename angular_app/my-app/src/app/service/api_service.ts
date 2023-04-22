import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
// import { Header } from 'antd/es/layout/layout';


const API_URL = 'https://api.samrish.com/vehicles';

@Injectable(
    {
        providedIn:'root' //to connect with server to get and put data on server 

    }
)
export class api_service{
    constructor(private http: HttpClient){

    }

    public get_data():Observable<any>{ 
        return this.http.get(API_URL) 
    }
    public add_vehicle(name: string,size: string, brand: string,model: string):Observable<any>{
        const body=
            {
                "vehicleNumber": name,
                "size": size,
                "brand": brand,
                "model":model
            }
        
        
        const headers={
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJpc3MiOiJzZWN1cmUtYXBpIiwiYXVkIjoic2VjdXJlLWFwcCIsInN1YiI6ImtyaXNoIiwiZXhwIjoxNjgyMjA3NTY3LCJyb2wiOlsiRFJJVkVSIl19.UhdkcR1ynyjbGQhMjGn33MTB2KZo5eRMlJqkaVE9VDuHzFtUfLYywv6AYIHNx_uSGL5ztqocLlL5q0ZcsMY9dw"
        }
        return this.http.post(API_URL,body,{ headers})

    }
}
