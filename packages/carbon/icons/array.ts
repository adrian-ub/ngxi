import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonArrayIcon],svg[carbon-array-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 5v22c0 1.1.9 2 2 2h4v-2H6V5h4V3H6c-1.1 0-2 .9-2 2m22-2h-4v2h4v22h-4v2h4c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"></svg:path>`,
})
export class CarbonArrayIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
