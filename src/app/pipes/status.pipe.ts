import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'statusPipe'
})
export class StatusPipe implements PipeTransform{
    transform(status: number) : string {
        if (status == 1) {
            return 'Ativo'
        } else {
            return 'Inativo'
        }
    }
}