import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlgemeenDagbladIcon],svg[arcticons-algemeen-dagblad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.524 36.813h5.765c6.192 0 11.211-5.02 11.211-11.211v-3.204c0-6.191-5.02-11.21-11.21-11.21h-9.414v17.136m0 0H8.148M4.5 36.813l11.012-25.625l11.011 25.625"></svg:path>`,
})
export class ArcticonsAlgemeenDagbladIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
