import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkGeoIcon],svg[nrk-geo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11 3.055A9.004 9.004 0 0 0 3.055 11H0v2h3.055A9.004 9.004 0 0 0 11 20.945V24h2v-3.055A9.004 9.004 0 0 0 20.945 13H24v-2h-3.055A9.004 9.004 0 0 0 13 3.055V0h-2zM12 19a7 7 0 1 1 0-14a7 7 0 0 1 0 14m0-3a4 4 0 1 0 0-8a4 4 0 0 0 0 8m0-2a2 2 0 1 1 0-4a2 2 0 0 1 0 4" clip-rule="evenodd"></svg:path>`,
})
export class NrkGeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
