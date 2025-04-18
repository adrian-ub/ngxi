import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpImageNotSupportedIcon],svg[ic-sharp-image-not-supported-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m21.9 21.9l-8.49-8.49L3 3l-.9-.9L.69 3.51L3 5.83V21h15.17l2.31 2.31zM5 18l3.5-4.5l2.5 3.01L12.17 15l3 3zm16 .17L5.83 3H21z"></svg:path>`,
})
export class IcSharpImageNotSupportedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
