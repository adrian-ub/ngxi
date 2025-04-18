import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsGccIcon],svg[arcticons-gcc-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M44.999 28.009A21.38 21.38 0 0 1 28.008 45M28 3a21.38 21.38 0 0 1 17 17m-42-.007A21.38 21.38 0 0 1 19.99 3.002M19.991 45A21.38 21.38 0 0 1 3 28.009"></svg:path><svg:circle cx="23.999" cy="24.001" r="17.259" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.696 25.537v.038a3.09 3.09 0 0 1-3.09 3.09h0a3.09 3.09 0 0 1-3.09-3.09v-3.149a3.09 3.09 0 0 1 3.09-3.09h0a3.09 3.09 0 0 1 3.09 3.09v.039m-8.594-.038a3.09 3.09 0 0 0-3.09-3.09h0a3.09 3.09 0 0 0-3.09 3.09v3.148a3.09 3.09 0 0 0 3.09 3.09h0a3.09 3.09 0 0 0 3.09-3.09h-3.09m20.278-.038v.038a3.09 3.09 0 0 1-3.09 3.09h0a3.09 3.09 0 0 1-3.09-3.09v-3.149a3.09 3.09 0 0 1 3.09-3.09h0a3.09 3.09 0 0 1 3.09 3.09v.039"></svg:path>`,
})
export class ArcticonsGccIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
