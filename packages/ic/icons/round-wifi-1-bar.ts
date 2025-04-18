import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icRoundWifi1BarIcon],svg[ic-round-wifi-1-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="18" r="2" fill="currentColor"></svg:circle>`,
})
export class IcRoundWifi1BarIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
