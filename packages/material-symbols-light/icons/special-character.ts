import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[materialSymbolsLightSpecialCharacterIcon],svg[material-symbols-light-special-character-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20v-2h4.616q-2.062-.99-3.281-2.904t-1.22-4.212q0-3.28 2.302-5.582T12 3t5.583 2.302t2.302 5.583q0 2.298-1.22 4.211T15.385 18H20v2h-6.808v-3.35q2.066-.408 3.38-2.038q1.313-1.631 1.313-3.727q0-2.454-1.716-4.17T12 5T7.83 6.716Q6.116 8.43 6.116 10.885q0 2.096 1.314 3.726q1.313 1.631 3.379 2.039V20z"></svg:path>`,
})
export class MaterialSymbolsLightSpecialCharacterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
