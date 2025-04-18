import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riTwitchLineIcon],svg[ri-twitch-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.301 3h16.7v11.7l-4.7 4.7h-3.9l-2.5 2.4h-2.9v-2.4h-4V6.2zm.7 14.4h4v2.4h.095l2.5-2.4h3.877L19 13.872V5H5zm10-9.4h2v4.7h-2zm0 0h2v4.7h-2zm-5 0h2v4.7h-2z"></svg:path>`,
})
export class RiTwitchLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
