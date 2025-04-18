import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightLineEndArrowNotchIcon],svg[material-symbols-light-line-end-arrow-notch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.192 16.827l2.406-4.327H2.5v-1h12.098l-2.406-4.327L19.788 12z"></svg:path>`,
})
export class MaterialSymbolsLightLineEndArrowNotchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
