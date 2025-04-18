import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonConnectionUsageIcon],svg[carbon-connection-usage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 26V6a2 2 0 0 0-2-2H4v2h11v20a2 2 0 0 0 2 2h11v-2z"></svg:path>`,
})
export class CarbonConnectionUsageIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
