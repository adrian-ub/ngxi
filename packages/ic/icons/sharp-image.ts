import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpImageIcon],svg[ic-sharp-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 21V3H3v18zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"></svg:path>`,
})
export class IcSharpImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
