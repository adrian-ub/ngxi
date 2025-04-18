import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDataArrayRoundedIcon],svg[material-symbols-data-array-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 20q-.425 0-.712-.288T15 19t.288-.712T16 18h2V6h-2q-.425 0-.712-.288T15 5t.288-.712T16 4h2q.825 0 1.413.588T20 6v12q0 .825-.587 1.413T18 20zM6 20q-.825 0-1.412-.587T4 18V6q0-.825.588-1.412T6 4h2q.425 0 .713.288T9 5t-.288.713T8 6H6v12h2q.425 0 .713.288T9 19t-.288.713T8 20z"></svg:path>`,
})
export class MaterialSymbolsDataArrayRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
