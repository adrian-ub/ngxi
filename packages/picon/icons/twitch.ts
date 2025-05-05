import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTwitchIcon],svg[picon-twitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4V2h1v2M3 4V2h1v2M2 1v4h1v1l1-1h2l1-1V1m1 4L6 7H3L2 8V7H0V2l2-2h6"></svg:path>`,
})
export class PiconTwitchIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
