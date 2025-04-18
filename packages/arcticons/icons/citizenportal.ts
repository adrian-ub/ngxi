import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsCitizenportalIcon],svg[arcticons-citizenportal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.178 2.5A21.723 21.723 0 1 1 3.479 33.714"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M39.389 20.983A16.822 16.822 0 1 1 22.8 6.96q.487 0 .967.027"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.367 13.983l1.19 3.663h3.852l-3.116 2.264l1.19 3.664l-3.116-2.264l-3.116 2.264l1.19-3.664l-3.116-2.264h3.852z"></svg:path>`,
})
export class ArcticonsCitizenportalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
