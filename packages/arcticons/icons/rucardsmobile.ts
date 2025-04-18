import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsRucardsmobileIcon],svg[arcticons-rucardsmobile-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.6 15.639h30.36a2.1 2.1 0 0 1 2.101 2.1h0V35.02a2.1 2.1 0 0 1-2.1 2.1H6.6a2.1 2.1 0 0 1-2.1-2.1V17.74a2.1 2.1 0 0 1 2.1-2.101"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M8.94 13.865v-.885a2.1 2.1 0 0 1 2.1-2.1H41.4a2.1 2.1 0 0 1 2.1 2.1h0v17.28a2.1 2.1 0 0 1-2.1 2.1h-.413m-26.035-1.745v-8.403m-1.05-.067l3.78.067m0 0a2.836 2.836 0 0 1 0 5.672h-3.78m0 1.575h3.781"></svg:path><svg:circle cx="23.881" cy="23.72" r="1.576" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="28.082" cy="28.972" r="1.576" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m23.25 30.548l5.463-8.403m-24.2-2.305h34.534M4.513 24.042h5.252m24.043 0h5.252"></svg:path>`,
})
export class ArcticonsRucardsmobileIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
