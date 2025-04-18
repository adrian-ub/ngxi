import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRaiffeisenMobilescanIcon],svg[arcticons-raiffeisen-mobilescan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.31 5.5H9.5a4 4 0 0 0-4 4v9.81m37 0V9.5a4 4 0 0 0-4-4h-9.81M5.5 28.69v9.81a4 4 0 0 0 4 4h9.81m23.19-9.743V28.69M28.691 42.5h4.065"></svg:path><svg:circle cx="38.5" cy="38.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 42.5v-8h2.619c1.48 0 2.681 1.203 2.681 2.687s-1.2 2.686-2.681 2.686H35.85m2.619 0l2.619 2.625"></svg:path>`,
})
export class ArcticonsRaiffeisenMobilescanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
