import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUnreadBrokenIcon],svg[solar-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m7 12.9l3.143 3.6l1.964-2.25M18 7.5L14.071 12"></svg:path>`,
})
export class SolarUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
