import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[featherWifiOffIcon],svg[feather-wifi-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1l22 22m-6.28-11.94A11 11 0 0 1 19 12.55m-14 0a10.94 10.94 0 0 1 5.17-2.39m.54-5.11A16 16 0 0 1 22.58 9M1.42 9a15.9 15.9 0 0 1 4.7-2.88m2.41 9.99a6 6 0 0 1 6.95 0M12 20h.01"></svg:path>`,
})
export class FeatherWifiOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
