import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsPlantaIcon],svg[arcticons-planta-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.5 27.734v-7.468h2.445c1.382 0 2.503 1.123 2.503 2.508s-1.12 2.508-2.503 2.508H10.5m6.752-5.016V26.8c0 .515.418.933.933.933h.28m12.85-6.487V26.8c0 .515.417.933.933.933h.28m-2.194-4.947h1.961m-8.867 3.081a1.867 1.867 0 0 1-1.867 1.867h0a1.867 1.867 0 0 1-1.867-1.867v-1.214c0-1.03.836-1.867 1.867-1.867h0c1.031 0 1.867.836 1.867 1.867m0 3.081v-4.948M37.5 25.867a1.867 1.867 0 0 1-1.867 1.867h0a1.867 1.867 0 0 1-1.867-1.867v-1.214c0-1.03.836-1.867 1.867-1.867h0c1.031 0 1.867.836 1.867 1.867m0 3.081v-4.948m-8.408 4.948v-3.08a1.867 1.867 0 0 0-1.868-1.868h0a1.867 1.867 0 0 0-1.867 1.867m0 3.081v-4.948"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsPlantaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
