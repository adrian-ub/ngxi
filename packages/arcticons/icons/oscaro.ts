import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOscaroIcon],svg[arcticons-oscaro-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.348 16.238c8.862-12.729 25.736-14.662 34.04-2.99M5.612 32.503c5.872 12.875 22.2 12.875 33.116 2.517"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M23.878 33.663c-3.622 0-6.28-2.899-6.28-6.28V20.86c0-3.623 2.9-6.522 6.282-6.522h0a6.496 6.496 0 0 1 6.522 6.468v6.334a6.496 6.496 0 0 1-6.469 6.523z"></svg:path>`,
})
export class ArcticonsOscaroIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
