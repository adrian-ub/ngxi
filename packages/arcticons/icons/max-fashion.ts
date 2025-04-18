import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsMaxFashionIcon],svg[arcticons-max-fashion-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m35.5 20.933l-4.63 6.134m4.63 0l-4.63-6.134M12.5 23.248a2.315 2.315 0 0 1 2.315-2.315h0a2.315 2.315 0 0 1 2.315 2.315v3.82m-4.63-6.135v6.134m4.63-3.819a2.315 2.315 0 0 1 2.315-2.315h0a2.315 2.315 0 0 1 2.315 2.315v3.82m6.73-2.316a2.315 2.315 0 0 1-2.315 2.315h0a2.315 2.315 0 0 1-2.315-2.315v-1.504a2.315 2.315 0 0 1 2.315-2.315h0a2.315 2.315 0 0 1 2.315 2.315m0 3.819v-6.134"></svg:path>`,
})
export class ArcticonsMaxFashionIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
