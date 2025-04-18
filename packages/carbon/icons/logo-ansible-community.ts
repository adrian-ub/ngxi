import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLogoAnsibleCommunityIcon],svg[carbon-logo-ansible-community-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M27.8 27.7L17.5 3.1c-.3-.7-.9-1.1-1.6-1.1s-1.3.4-1.6 1.1L3 30h3.9l4.5-11.1l13.3 10.7c.5.4.9.6 1.4.6c1 0 1.9-.7 1.9-1.8c0-.2-.1-.4-.2-.7M15.9 7.5l6.7 16.4L12.5 16z"></svg:path>`,
})
export class CarbonLogoAnsibleCommunityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
