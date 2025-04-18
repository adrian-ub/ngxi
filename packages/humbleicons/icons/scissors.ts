import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsScissorsIcon],svg[humbleicons-scissors-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 6c-3.573 2.225-5.943 3.854-8.55 6M20 18c-2.626-1.636-4.602-2.949-6.5-4.382M8.598 9.54a3 3 0 1 0-3.196-5.08a3 3 0 0 0 3.196 5.08m0 0A89 89 0 0 0 11.45 12m-2.852 2.46a3 3 0 1 0-3.196 5.079a3 3 0 0 0 3.196-5.078Zm0 0A89 89 0 0 1 11.45 12"></svg:path>`,
})
export class HumbleiconsScissorsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
