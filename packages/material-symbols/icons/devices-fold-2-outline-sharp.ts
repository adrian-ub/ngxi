import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsDevicesFold2OutlineSharpIcon],svg[material-symbols-devices-fold-2-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 21V3h13.95l4 10H19v8zm4.4-10H20l-2.4-6H7zM7 19h10v-6H8.05L7 10.375zm6.5-11"></svg:path>`,
})
export class MaterialSymbolsDevicesFold2OutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
