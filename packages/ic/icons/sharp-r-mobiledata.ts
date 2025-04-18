import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icSharpRMobiledataIcon],svg[ic-sharp-r-mobiledata-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.8 7.2L9 10H7L5.87 7.33H4V10H2V2h7v5.2zM7 4H4v1.33h3z"></svg:path>`,
})
export class IcSharpRMobiledataIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
