import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop75Icon],svg[ic-sharp-crop-7-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 5H3v14h18zm-2 12H5V7h14z"></svg:path>`,
})
export class IcSharpCrop75Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
