import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXpInvestimentosIcon],svg[arcticons-xp-investimentos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4M27.715 27.383l-7.558 10.015m7.558 0l-7.558-10.015"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M31.51 33.619a3.78 3.78 0 0 0 3.78 3.78h0a3.78 3.78 0 0 0 3.779-3.78v-2.457a3.78 3.78 0 0 0-3.78-3.779h0a3.78 3.78 0 0 0-3.779 3.78m0-3.78V42.5"></svg:path>`,
})
export class ArcticonsXpInvestimentosIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
