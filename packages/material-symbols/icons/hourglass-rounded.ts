import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHourglassRoundedIcon],svg[material-symbols-hourglass-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 22q-.425 0-.712-.288T4 21t.288-.712T5 20h1v-3q0-1.525.713-2.863T8.7 12q-1.275-.8-1.987-2.137T6 7V4H5q-.425 0-.712-.288T4 3t.288-.712T5 2h14q.425 0 .713.288T20 3t-.288.713T19 4h-1v3q0 1.525-.712 2.863T15.3 12q1.275.8 1.988 2.138T18 17v3h1q.425 0 .713.288T20 21t-.288.713T19 22z"></svg:path>`,
})
export class MaterialSymbolsHourglassRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
