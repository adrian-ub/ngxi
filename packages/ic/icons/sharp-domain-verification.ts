import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpDomainVerificationIcon],svg[ic-sharp-domain-verification-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16.6 10.88l-1.42-1.42l-4.24 4.25l-2.12-2.13L7.4 13l3.54 3.54z"></svg:path><svg:path fill="currentColor" d="M3 4v16h18V4zm16 14H5V8h14z"></svg:path>`,
})
export class IcSharpDomainVerificationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
