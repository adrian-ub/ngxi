import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMyLinkManagerIcon],svg[arcticons-my-link-manager-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="30.766" height="30.766" x="11.991" y="4.626" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.757 12.082v25.544a4 4 0 0 0 4 4h25.544m3.307-32.851h-9.081v15.749l4.541-2.811l4.54 2.811z"></svg:path>`,
})
export class ArcticonsMyLinkManagerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
