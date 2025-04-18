import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoArrowUpLIcon],svg[fontisto-arrow-up-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.92 5.76L12.16 0L6.4 5.76h4.24V24h3.04V5.76z"></svg:path>`,
})
export class FontistoArrowUpLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
