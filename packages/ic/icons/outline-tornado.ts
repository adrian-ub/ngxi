import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icOutlineTornadoIcon],svg[ic-outline-tornado-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23 3H1l11 19zm-3.47 2l-1.74 3H6.21L4.47 5zm-9.27 10h3.48L12 18.01zm4.64-2H9.1l-1.74-3h9.27z"></svg:path>`,
})
export class IcOutlineTornadoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
