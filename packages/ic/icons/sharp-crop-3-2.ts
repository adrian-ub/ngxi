import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpCrop32Icon],svg[ic-sharp-crop-3-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 6H3v12h18zm-2 10H5V8h14z"></svg:path>`,
})
export class IcSharpCrop32Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
