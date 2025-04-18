import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAegIcon],svg[arcticons-aeg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.371 24h4.033m2.153 6.186h-6.186V17.814h6.186m9.943 4.098a4.1 4.1 0 0 0-4.098-4.098h0a4.1 4.1 0 0 0-4.099 4.098v4.176a4.1 4.1 0 0 0 4.099 4.098h0a4.1 4.1 0 0 0 4.098-4.098h-4.098m-16.063 0h-5.481M10.5 30.186l4.098-12.372l4.099 12.372"></svg:path>`,
})
export class ArcticonsAegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
