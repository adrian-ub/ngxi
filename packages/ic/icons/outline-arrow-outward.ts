import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineArrowOutwardIcon],svg[ic-outline-arrow-outward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6v2h8.59L5 17.59L6.41 19L16 9.41V18h2V6z"></svg:path>`,
})
export class IcOutlineArrowOutwardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
