import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightHolidayVillageOutlineIcon],svg[material-symbols-light-holiday-village-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.385 19v-8.577l5-5l5 5V19zm1-1h3.23v-2.308h1.539V18h3.23v-7.175l-4-4l-4 4zm3.23-5.23v-1.54h1.539v1.54zM16 19.02V9.751l-4.329-4.329h1.421L17 9.331v9.688zm2.616 0V8.66l-3.237-3.237h1.44l2.797 2.816v10.78zM5.385 18h8z"></svg:path>`,
})
export class MaterialSymbolsLightHolidayVillageOutlineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
