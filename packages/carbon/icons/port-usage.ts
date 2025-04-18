import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPortUsageIcon],svg[carbon-port-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7h-2V3.6c0-.9-.7-1.6-1.6-1.6H4v2h13v3h-2c-3.3 0-6 2.7-6 6v6c0 3.3 2.7 6 6 6h2v3H4v2h13.4c.9 0 1.6-.7 1.6-1.6V25h2c3.3 0 6-2.7 6-6v-6c0-3.3-2.7-6-6-6m4 12c0 2.2-1.8 4-4 4h-6c-2.2 0-4-1.8-4-4v-6c0-2.2 1.8-4 4-4h6c2.2 0 4 1.8 4 4z"></svg:path>`,
})
export class CarbonPortUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
