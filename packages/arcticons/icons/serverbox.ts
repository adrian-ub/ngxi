import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsServerboxIcon],svg[arcticons-serverbox-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.662 4.5h22.674a3.453 3.453 0 0 1 3.452 3.453v3.274a3.453 3.453 0 0 1-3.452 3.452H12.662a3.453 3.453 0 0 1-3.453-3.452q0 0 0 0V7.953A3.453 3.453 0 0 1 12.662 4.5"></svg:path><svg:circle cx="14.386" cy="9.589" r="1.538" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.628" cy="9.589" r="1.625" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.662 19.24h22.674a3.453 3.453 0 0 1 3.452 3.453v3.274a3.453 3.453 0 0 1-3.452 3.452H12.662a3.453 3.453 0 0 1-3.453-3.452q0 0 0 0v-3.274a3.453 3.453 0 0 1 3.453-3.453"></svg:path><svg:circle cx="14.386" cy="24.329" r="1.538" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="20.628" cy="24.329" r="1.538" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M12.808 19.24v-4.56m22.383 4.56v-4.56"></svg:path><svg:circle cx="23.999" cy="39.34" r="4.16" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 29.42v5.76m4.16 4.16l10.806-.096m-19.126.001l-10.806.096"></svg:path>`,
})
export class ArcticonsServerboxIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
