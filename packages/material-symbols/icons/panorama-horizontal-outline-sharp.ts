import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsPanoramaHorizontalOutlineSharpIcon],svg[material-symbols-panorama-horizontal-outline-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 17.65q1.95-.575 3.963-.862T12 16.5t4.038.288T20 17.65V6.375q-1.95.575-3.963.85T12 7.5t-4.038-.275T4 6.375zM2.025 20.5V3.475q1.875.875 4.5 1.45t5.5.575t5.5-.575t4.5-1.45V20.5q-1.875-.875-4.5-1.437t-5.5-.563t-5.5.563t-4.5 1.437M12 12"></svg:path>`,
})
export class MaterialSymbolsPanoramaHorizontalOutlineSharpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
