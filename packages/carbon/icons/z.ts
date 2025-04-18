import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonZIcon],svg[carbon-z-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M20 9h-8v2h6l-6 10v2h8v-2h-6l6-10V9z" fill="currentColor"></svg:path>`,
})
export class CarbonZIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
