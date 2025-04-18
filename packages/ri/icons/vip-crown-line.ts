import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVipCrownLineIcon],svg[ri-vip-crown-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm0-14l5 3.5l5-6.5l5 6.5l5-3.5v12h-20zm2 3.841V15h16V8.841l-3.42 2.394l-4.58-5.955l-4.58 5.955z"></svg:path>`,
})
export class RiVipCrownLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
