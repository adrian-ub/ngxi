import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHandyparkenIcon],svg[arcticons-handyparken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M30.103 37.398L17.218 24.513l4.188-4.187a6.124 6.124 0 0 1 8.697 0a6.124 6.124 0 0 1 0 8.697l-4.188 4.187"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.423 9.232c-6.309-6.31-16.537-6.31-22.846 0c-6.309 6.308-6.309 16.537 0 22.845L24 43.5l11.423-11.423c6.309-6.308 6.309-16.537 0-22.845"></svg:path>`,
})
export class ArcticonsHandyparkenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
