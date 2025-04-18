import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLifeFitsIntoHomeIcon],svg[arcticons-life-fits-into-home-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M42.05 20.04L25.632 6.191a2.53 2.53 0 0 0-3.263 0L5.954 20.04a1.266 1.266 0 0 0 .816 2.233h4.343v17.45a1 1 0 0 0 1 1h8.296v-6.209a3.73 3.73 0 0 1 3.4-3.792a3.594 3.594 0 0 1 3.786 3.589v6.412h8.296a1 1 0 0 0 1-1v-17.45h4.342a1.266 1.266 0 0 0 .816-2.233"></svg:path><svg:circle cx="24.002" cy="23.159" r="4.506" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsLifeFitsIntoHomeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
