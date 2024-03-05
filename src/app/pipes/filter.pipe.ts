import { Pipe, PipeTransform } from "@angular/core";
import { UsersService } from "../services/users.service";

@Pipe({
    name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {
    constructor(private readonly _userData: UsersService) {}

    transform(name: string) {
        const filteredUsers = this._userData.getUser(name)
        console.log(filteredUsers)
        return filteredUsers
    }
}