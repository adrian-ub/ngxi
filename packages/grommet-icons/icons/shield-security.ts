import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsShieldSecurityIcon],svg[grommet-icons-shield-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 22s-9-4-9-11V5l9-3l9 3v6c0 7-9 11-9 11Zm0-8a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0-6V5m0 12v-3m-6-3h3m6 0h3M8 7l2 2m4 4l2 2m0-8l-2 2m-4 4l-2 2"></svg:path>`,
})
export class GrommetIconsShieldSecurityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
