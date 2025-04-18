import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCarpenterIcon],svg[ic-sharp-carpenter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1.5L3.11 5.39l8.13 11.67l-1.41 1.41l4.24 4.24l7.07-7.07zm5.66 16.97l4.24-4.24l1.41 1.41l-4.24 4.24z"></svg:path>`,
})
export class IcSharpCarpenterIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
