import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpVrpanoIcon],svg[ic-sharp-vrpano-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 5.5c-5.25 0-9.01-1.54-10-1.92V20.4c2.16-.76 5.21-1.9 10-1.9c4.78 0 7.91 1.17 10 1.9V3.6c-2.09.73-5.23 1.9-10 1.9m0 9.5c-2.34 0-4.52.15-6.52.41l3.69-4.42l2 2.4L14 10l4.51 5.4c-1.99-.25-4.21-.4-6.51-.4"></svg:path>`,
})
export class IcSharpVrpanoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
