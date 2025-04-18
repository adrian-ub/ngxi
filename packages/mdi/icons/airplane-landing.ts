import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiAirplaneLandingIcon],svg[mdi-airplane-landing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16l5.31 1.42c.8.21 1.62-.26 1.84-1.06c.21-.79-.26-1.62-1.06-1.84l-5.31-1.42l-2.76-9.03l-1.93-.5v8.28L5.15 8.95l-.93-2.32l-1.45-.39v5.17l1.6.43z"></svg:path>`,
})
export class MdiAirplaneLandingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
