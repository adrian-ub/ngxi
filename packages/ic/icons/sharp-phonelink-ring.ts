import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpPhonelinkRingIcon],svg[ic-sharp-phonelink-ring-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20.1 7.7l-1 1c1.8 1.8 1.8 4.6 0 6.5l1 1c2.5-2.3 2.5-6.1 0-8.5M18 9.8l-1 1c.5.7.5 1.6 0 2.3l1 1c1.2-1.2 1.2-3 0-4.3M16 1H2v22h14zm-2 19H4V4h10z"></svg:path>`,
})
export class IcSharpPhonelinkRingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
