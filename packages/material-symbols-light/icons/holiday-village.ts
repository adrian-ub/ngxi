import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHolidayVillageIcon],svg[material-symbols-light-holiday-village-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.385 19v-8.577l5-5l5 5V19h-4.231v-3.308H8.615V19zm4.23-6.23h1.539v-1.54H8.615zM16 19.02V9.751l-4.329-4.329h1.421L17 9.331v9.688zm2.616 0V8.66l-3.237-3.237h1.44l2.797 2.816v10.78z"></svg:path>`,
})
export class MaterialSymbolsLightHolidayVillageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
