import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightAlignStretchIcon],svg[material-symbols-light-align-stretch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 9.5V4H3V3h18v1h-4.5v5.5zM3 21v-1h4.5v-5.5h9V20H21v1z"></svg:path>`,
})
export class MaterialSymbolsLightAlignStretchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
