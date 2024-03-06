import { Pipe, PipeTransform } from "@angular/core";
import { UsersService } from "../services/users.service";
import { IUser } from "../interfaces/User.interface";

@Pipe({
    name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
    finalList: IUser[] = []
    constructor(private readonly _userData: UsersService) {}

    transform(name: string) {
        this._userData.getUser(name).subscribe((item) => {
            this.finalList = item
        })
        return this.finalList
    }
}