import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHarddiskIcon],svg[whh-harddisk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M768.338 1024h-640q-53 0-90.5-37.5T.338 896V128q0-53 37.5-90.5t90.5-37.5h640q53 0 90.5 37.5t37.5 90.5v768q0 53-37.5 90.5t-90.5 37.5m0-288q0-32-19-57t-49-34q68-87 68-197q0-87-43-160.5T608.838 171t-160.5-43t-160.5 43t-116.5 116.5t-43 160.5q0 110 68 197q-30 9-49 34t-19 57v64q0 40 28 68t68 28h448q40 0 68-28t28-68zm-320-160q-53 0-90.5-37.5t-37.5-90.5t37.5-90.5t90.5-37.5t90.5 37.5t37.5 90.5t-37.5 90.5t-90.5 37.5"></svg:path>`,
})
export class WhhHarddiskIcon {
  readonly viewBox = input("0 0 897 1024")
  readonly width = input("0.88em")
  readonly height = input("1em")
}
