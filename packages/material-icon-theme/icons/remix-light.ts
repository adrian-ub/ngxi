import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialIconThemeRemixLightIcon],svg[material-icon-theme-remix-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#455a64" d="M28 12v-2a8 8 0 0 0-8-8H4v6h12.83a3.114 3.114 0 0 1 3.166 2.839A3 3 0 0 1 17 14H4v6h12a4 4 0 0 1 4 4v6h8v-5a7 7 0 0 0-7-7h1a6 6 0 0 0 6-6M12 26H4v4h10v-2a2 2 0 0 0-2-2"></svg:path>`,
})
export class MaterialIconThemeRemixLightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
