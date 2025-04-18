import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineTempleHinduIcon],svg[ic-outline-temple-hindu-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 11v2h-2L15 3V1h-2v2h-2.03V1h-2v2.12L6 13H4v-2H2v11h9v-5h2v5h9V11zm-4.69 0H8.69l.6-2h5.42zm-1.2-4H9.89l.6-2h3.02zM20 20h-5v-5H9v5H4v-5h3.49l.6-2h7.82l.6 2H20z"></svg:path>`,
})
export class IcOutlineTempleHinduIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
