import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsContactsRoundedIcon],svg[material-symbols-contacts-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 13q1.25 0 2.125-.875T15 10t-.875-2.125T12 7t-2.125.875T9 10t.875 2.125T12 13m-8 7q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm1.75-2h12.5q-1.125-1.4-2.725-2.2T12 15t-3.525.8T5.75 18M5 23q-.425 0-.712-.288T4 22t.288-.712T5 21h14q.425 0 .713.288T20 22t-.288.713T19 23zM5 3q-.425 0-.712-.288T4 2t.288-.712T5 1h14q.425 0 .713.288T20 2t-.288.713T19 3z"></svg:path>`,
})
export class MaterialSymbolsContactsRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
