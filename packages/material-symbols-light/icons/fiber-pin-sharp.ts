import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightFiberPinSharpIcon],svg[material-symbols-light-fiber-pin-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.385 14.692h.884v-2.076h3.5V9.308H5.385zm5.98 0h.885V9.308h-.885zm2.866 0h.827V10.77l2.704 3.923h.854V9.308h-.827v3.923l-2.655-3.923h-.903zm-7.962-2.961v-1.539h2.616v1.539zM3 19V5h18v14z"></svg:path>`,
})
export class MaterialSymbolsLightFiberPinSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
