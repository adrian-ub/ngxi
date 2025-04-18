import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCalculatorIcon],svg[fontisto-calculator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19.502 0H1.498C.67 0 0 .671 0 1.498v21.004C0 23.33.671 24 1.498 24H19.5c.828 0 1.498-.671 1.498-1.498V1.498c0-.827-.67-1.497-1.497-1.498zM6 21H3v-3h3zm0-4.5H3v-2.998h3zM6 12H3V9.001h3zm6 9H9v-3h3zm0-4.5H9v-2.998h3zm0-4.5H9V9.001h3zm6 9h-3V9h3zm0-13.92H3V3h15z"></svg:path>`,
})
export class FontistoCalculatorIcon {
  readonly viewBox = input("0 0 21 24")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
