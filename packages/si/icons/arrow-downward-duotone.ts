import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[siArrowDownwardDuotoneIcon],svg[si-arrow-downward-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="1.5" d="m8 14l4 4m0 0l4-4m-4 4V6"></svg:path>`,
})
export class SiArrowDownwardDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
