import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRaiffeisenVorsorgeradarIcon],svg[arcticons-raiffeisen-vorsorgeradar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.824 36.934A21.504 21.504 0 0 1 21 2.708m12.431 40.619a21.52 21.52 0 0 1-24.634-4.124M24 2.5a21.51 21.51 0 0 1 19.326 30.932"></svg:path><svg:circle cx="38.5" cy="38.5" r="7" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.85 42.5v-8h2.619a2.687 2.687 0 0 1 0 5.374H35.85m2.619-.001l2.619 2.625"></svg:path>`,
})
export class ArcticonsRaiffeisenVorsorgeradarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
