import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsFlagIcon],svg[lets-icons-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 13V5.694c0-.317 0-.475.104-.55s.254-.025.554.075l9.919 3.307c.588.196.882.294.882.474s-.294.278-.882.474zm0 0v6"></svg:path>`,
})
export class LetsIconsFlagIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
