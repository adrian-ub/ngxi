import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCompassFillIcon],svg[lets-icons-compass-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m2.598-11.5c-.574-.994-3.575-2.645-4.931-3.355a.478.478 0 0 0-.704.407c-.064 1.53-.135 4.954.439 5.948s3.575 2.645 4.932 3.355a.48.48 0 0 0 .704-.407c.063-1.53.134-4.954-.44-5.948" clip-rule="evenodd"></svg:path>`,
})
export class LetsIconsCompassFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
