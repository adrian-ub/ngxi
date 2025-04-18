import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop169Icon],svg[ic-sharp-crop-16-9-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7H3v10h18zm-2 8H5V9h14z"></svg:path>`,
})
export class IcSharpCrop169Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
