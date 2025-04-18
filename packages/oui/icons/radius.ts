import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ouiRadiusIcon],svg[oui-radius-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M3.05 12.95a7 7 0 1 0 9.9-9.9a7 7 0 0 0-9.9 9.9m.707-.707a6 6 0 0 0 8.825-8.118L10 6.707V10H6V6h3.293l2.582-2.582a6 6 0 0 0-8.118 8.825M9 7v2H7V7z" clip-rule="evenodd"></svg:path>`,
})
export class OuiRadiusIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
