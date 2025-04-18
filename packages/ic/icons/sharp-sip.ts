import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpSipIcon],svg[ic-sharp-sip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.5 10.5h2v1h-2z"></svg:path><svg:path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2m-10 6.5H6.5v.75H10V15H5v-1.5h3.5v-.75H5V9h5zm3 4.5h-2V9h2zm6-6v4h-3.5v2H14V9z"></svg:path>`,
})
export class IcSharpSipIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
