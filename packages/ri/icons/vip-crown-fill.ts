import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVipCrownFillIcon],svg[ri-vip-crown-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.005 19h20v2h-20zm0-14l5 3l5-6l5 6l5-3v12h-20z"></svg:path>`,
})
export class RiVipCrownFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
