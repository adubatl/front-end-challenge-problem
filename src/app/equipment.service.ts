import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { environment } from "src/environments/environment";
import { Equipment } from "./equipment";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
    providedIn: "root",
})
export class EquipmentService {
    private equipUrl = `${environment.apiUrl}/equipment`;
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
    getEquipment(): Observable<Equipment[]> {
        return this.http
            .get<Equipment[]>(this.equipUrl)
            .pipe(
                catchError(this.handleError<Equipment[]>("getEquipment", []))
            );
    }
    constructor(private http: HttpClient) {}
}
