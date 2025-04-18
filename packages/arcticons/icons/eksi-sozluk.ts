import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsEksiSozlukIcon],svg[arcticons-eksi-sozluk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.533 29.967c0 7.474-6.06 13.533-13.533 13.533s-13.533-6.059-13.533-13.533C10.467 19.094 24 4.5 24 4.5s13.533 14.594 13.533 25.467"></svg:path>`,
})
export class ArcticonsEksiSozlukIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
