import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsQuickswitchIcon],svg[arcticons-quickswitch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="17.249" height="33.211" x="15.375" y="7.395" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.065"></svg:rect><svg:rect width="7.195" height="28.398" x="4.5" y="9.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.065"></svg:rect><svg:rect width="7.195" height="28.398" x="36.305" y="9.8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.065"></svg:rect>`,
})
export class ArcticonsQuickswitchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
