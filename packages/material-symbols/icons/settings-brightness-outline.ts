import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsSettingsBrightnessOutlineIcon],svg[material-symbols-settings-brightness-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 17.5l1.5-1.5H16v-2.5l1.5-1.5l-1.5-1.5V8h-2.5L12 6.5L10.5 8H8v2.5L6.5 12L8 13.5V16h2.5zm0-2.5V9q1.25 0 2.125.875T15 12t-.875 2.125T12 15m-8 5q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V6H4zm0 0V6z"></svg:path>`,
})
export class MaterialSymbolsSettingsBrightnessOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
