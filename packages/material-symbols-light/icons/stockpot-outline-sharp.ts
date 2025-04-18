import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightStockpotOutlineSharpIcon],svg[material-symbols-light-stockpot-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 19V7.98h16V19zm1-1h14V8.98H5zM4 6.596v-1h5.5V4h5v1.596H20v1zm8 6.885"></svg:path>`,
})
export class MaterialSymbolsLightStockpotOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
