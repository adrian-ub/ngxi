import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpHideImageIcon],svg[ic-sharp-hide-image-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 3H5.83L21 18.17zM2.81 2.81L1.39 4.22L3 5.83V21h15.17l1.61 1.61l1.41-1.41zM6 17l3-4l2.25 3l.82-1.1l2.1 2.1z"></svg:path>`,
})
export class IcSharpHideImageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
