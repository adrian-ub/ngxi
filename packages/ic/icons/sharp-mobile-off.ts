import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpMobileOffIcon],svg[ic-sharp-mobile-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 5v8.61l2 2V1H5v.61L8.39 5zM2.9 2.35L1.49 3.76L5 7.27V23h14v-1.73l1.7 1.7l1.41-1.41zM7 19V9.27L16.73 19z"></svg:path>`,
})
export class IcSharpMobileOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
