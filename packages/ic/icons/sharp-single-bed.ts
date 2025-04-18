import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSingleBedIcon],svg[ic-sharp-single-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 10V5H6v5H4v7h1.33L6 19h1l.67-2h8.67l.66 2h1l.67-2H20v-7zm-7 0H8V7h3zm5 0h-3V7h3z"></svg:path>`,
})
export class IcSharpSingleBedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
