import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMapsHomeWorkIcon],svg[ic-sharp-maps-home-work-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 11v10h5v-6h4v6h5V11L8 6z"></svg:path><svg:path fill="currentColor" d="M10 3v1.97l7 5V11h2v2h-2v2h2v2h-2v4h6V3zm9 6h-2V7h2z"></svg:path>`,
})
export class IcSharpMapsHomeWorkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
