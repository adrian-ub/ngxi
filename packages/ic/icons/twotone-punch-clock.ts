import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotonePunchClockIcon],svg[ic-twotone-punch-clock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 3h8v3H8zM5 20h14V8H5zm7-11c2.76 0 5 2.24 5 5s-2.24 5-5 5s-5-2.24-5-5s2.24-5 5-5" opacity=".3"></svg:path><svg:path fill="currentColor" d="M19 6h-1V1H6v5H5c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2M8 3h8v3H8zm11 17H5V8h14z"></svg:path><svg:path fill="currentColor" d="M12 19c2.76 0 5-2.24 5-5s-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5m0-8.5c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5s-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5"></svg:path><svg:path fill="currentColor" d="m13.85 15.14l-1.35-1.35V11.5h-1v2.71l1.64 1.64z"></svg:path>`,
})
export class IcTwotonePunchClockIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
