import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsChargingStationOutlineRoundedIcon],svg[material-symbols-charging-station-outline-rounded-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.5 13h-1.2q-.275 0-.425-.238t-.025-.487l2.175-4.325q.1-.175.288-.138t.187.238V11h1.2q.275 0 .425.238t.025.487l-2.175 4.325q-.1.175-.288.138t-.187-.238zM7 23q-.825 0-1.412-.587T5 21V3q0-.825.588-1.412T7 1h10q.825 0 1.413.588T19 3v18q0 .825-.587 1.413T17 23zm0-3v1h10v-1zm0-2h10V6H7zM7 4h10V3H7zm0 0V3zm0 16v1z"></svg:path>`,
})
export class MaterialSymbolsChargingStationOutlineRoundedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
