import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLdaRoundedIcon],svg[material-symbols-lda-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11 18.575l-4.775-2q-.575-.225-.9-.737T5 14.724V13q0-.825.588-1.412T7 11h4V8h-1q-.825 0-1.412-.587T8 6V4q0-.825.588-1.412T10 2h4q.825 0 1.413.588T16 4v2q0 .825-.587 1.413T14 8h-1v3h4q.825 0 1.413.588T19 13v1.725q0 .6-.325 1.113t-.9.737l-4.775 2V21q0 .425-.287.713T12 22t-.712-.288T11 21zm0-2.175V13H7v1.725zm2 0l4-1.675V13h-4z"></svg:path>`,
})
export class MaterialSymbolsLdaRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
