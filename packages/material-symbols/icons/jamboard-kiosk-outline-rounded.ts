import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsJamboardKioskOutlineRoundedIcon],svg[material-symbols-jamboard-kiosk-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 21q-.425 0-.712-.288T6 20t.288-.712T7 19h4v-3H4q-.825 0-1.412-.587T2 14V5q0-.825.588-1.412T4 3h16q.825 0 1.413.588T22 5v9q0 .825-.587 1.413T20 16h-7v3h4q.425 0 .713.288T18 20t-.288.713T17 21zm-3-7h16V5H4zm0 0V5z"></svg:path>`,
})
export class MaterialSymbolsJamboardKioskOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
