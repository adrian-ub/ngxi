import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightCompareArrowsIcon],svg[material-symbols-light-compare-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m8 18.98l-.708-.713l3.095-3.094H3v-1h7.387l-3.095-3.094l.708-.713l4.308 4.307zm8-5.365l-4.308-4.307L16 5l.708.714l-3.094 3.094H21v1h-7.386l3.094 3.094z"></svg:path>`,
})
export class MaterialSymbolsLightCompareArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
