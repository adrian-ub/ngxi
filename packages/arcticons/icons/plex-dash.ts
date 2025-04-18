import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlexDashIcon],svg[arcticons-plex-dash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 24.959h7.392l4.742 7.976l11.608-19.78l5.84 10.01H42.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.269 16.86l4.283 7.217l-8.95 15.353l-8.496.035zM24.29 8.535l2.855 4.424l-4.214 7.453l-6.86-11.738z"></svg:path>`,
})
export class ArcticonsPlexDashIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
