import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLinkwallIcon],svg[arcticons-linkwall-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 43.47c1.69 0 15.25-7.77 15.25-16.94V12.444L24 4.53L8.75 12.444V26.53c0 9.17 13.56 16.94 15.25 16.94"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m14.972 23.565l6.309 6.309l11.748-11.748"></svg:path>`,
})
export class ArcticonsLinkwallIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
