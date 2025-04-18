import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSouthWestIcon],svg[ic-sharp-south-west-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19v-2H8.41L20 5.41L18.59 4L7 15.59V9H5v10z"></svg:path>`,
})
export class IcSharpSouthWestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
