import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'formatDate'
})
export class DateFormatPipe implements PipeTransform {
    transform(value: string | Date, locale: string = 'pt-BR'): string {
        if (!value) return '';
        const date = new Date(value);
        const intl = new Intl.DateTimeFormat('pt-BR', {
            timeZone: 'America/Sao_Paulo',
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
        return intl.format(date);
    }
}
