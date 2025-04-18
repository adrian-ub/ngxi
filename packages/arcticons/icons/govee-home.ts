import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGoveeHomeIcon],svg[arcticons-govee-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M4.646 14.626C8.129 7.448 15.486 2.5 24 2.5a21.43 21.43 0 0 1 15.203 6.297M45.5 24c0 11.874-9.626 21.5-21.5 21.5c-8.545 0-15.926-4.985-19.393-12.206M45.5 24H17"></svg:path><svg:circle cx="5.783" cy="24" r="3.283" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsGoveeHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
