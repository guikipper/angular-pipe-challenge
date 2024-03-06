import { Injectable } from "@angular/core";
import { IUser } from "../interfaces/User.interface";
import { operations } from "../userData/userData";
import { Observable, of } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UsersService {
    getUser(name: string) : Observable<IUser[]> {
        let newData = operations.filter((user) => {
            if (user.customerName.toLocaleLowerCase().includes(name.toLocaleLowerCase())) {
                return user
            } else {
                return null
            }
             
        })
        return of(newData)
    }
}