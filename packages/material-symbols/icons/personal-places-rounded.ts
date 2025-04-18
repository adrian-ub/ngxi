import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPersonalPlacesRoundedIcon],svg[material-symbols-personal-places-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 20V6q0-.825.588-1.412T8 4h7.45q.5 0 .925.225t.7.625l2.125 3q.35.525.35 1.15t-.35 1.15l-2.125 3q-.275.4-.7.625T15.45 14H8v6q0 .425-.288.713T7 21t-.712-.288T6 20"></svg:path>`,
})
export class MaterialSymbolsPersonalPlacesRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
