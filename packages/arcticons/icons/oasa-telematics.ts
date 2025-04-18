import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOasaTelematicsIcon],svg[arcticons-oasa-telematics-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="23.16" cy="23.159" r="8.308" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.468 42.5h9.351V23.16c0-3.005-.75-5.834-2.073-8.31l3.754.002V5.5H23.16C13.406 5.5 5.5 13.406 5.5 23.16s7.906 17.659 17.66 17.659c2.905 0 5.766-.717 8.318-2.082z"></svg:path>`,
})
export class ArcticonsOasaTelematicsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
