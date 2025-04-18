import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHarborIcon],svg[carbon-harbor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27 17a11.01 11.01 0 0 1-10 10.95V14h6v-2h-6V9.858a4 4 0 1 0-2 0V12H9v2h6v13.95A11.01 11.01 0 0 1 5 17H3a13 13 0 0 0 26 0ZM14 6a2 2 0 1 1 2 2a2 2 0 0 1-2-2"></svg:path>`,
})
export class CarbonHarborIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
