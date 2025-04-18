import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKotlinConfIcon],svg[arcticons-kotlin-conf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11.283 9.304v6.783H4.5zm9.043 21.479L42.19 9.304H28.24L13.543 24m14.697-.565l15.26 15.26h-2.826L26.826 24.849"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.5 20.044v-7.348l2.26 2.26V17.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M15.804 21.74V11.564l-2.26-2.26V24l14.695 14.696h2.826l-9.043-9.044"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.717 27.957l10.74 10.739h2.826L25.13 26.543"></svg:path>`,
})
export class ArcticonsKotlinConfIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
