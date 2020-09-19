import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

import { MessageService } from "./message.service";
import { Equipment } from "./equipment";

@Injectable({
    providedIn: "root",
})
export class EquipmentService {
    /**
     * Handle Http operation that failed totally on accident.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = "operation", result?: T) {
        return (error: any): Observable<T> => {
            console.error(error); // log to console instead
            this.log(`${operation} failed: ${error.message}`);
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
    private equipmentUrl = "${environment.apiUrl}/equipment";
    getEquipment(): Observable<Equipment[]> {
        return this.http.get<Equipment[]>(this.equipmentUrl).pipe(
            tap((_) => this.log("fetched Equipment")),
            catchError(this.handleError<Equipment[]>("getEquipment", []))
        );
    }
    private log(message: string) {
        this.messageService.add(`EquipmentService: ${message}`);
    }
    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {}
}
