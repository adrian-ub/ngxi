import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsHolidayVillageOutlineIcon],svg[material-symbols-holiday-village-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 20V10l6-6l6 6v10zm2-2h3v-3h2v3h3v-7.175l-4-4l-4 4zm3-5v-2h2v2zm9 7V9.175L10.825 4h2.825L18 8.35V20zm4 0V7.525L16.475 4H19.3L22 6.7V20zM4 18h8z"></svg:path>`,
})
export class MaterialSymbolsHolidayVillageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
