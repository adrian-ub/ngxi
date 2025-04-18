import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSecurityServicesIcon],svg[carbon-security-services-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30 24v-2h-2.101a5 5 0 0 0-.732-1.753l1.49-1.49l-1.414-1.414l-1.49 1.49A5 5 0 0 0 24 18.101V16h-2v2.101a5 5 0 0 0-1.753.732l-1.49-1.49l-1.414 1.414l1.49 1.49A5 5 0 0 0 18.101 22H16v2h2.101a5 5 0 0 0 .732 1.753l-1.49 1.49l1.414 1.414l1.49-1.49a5 5 0 0 0 1.753.732V30h2v-2.101a5 5 0 0 0 1.753-.732l1.49 1.49l1.414-1.414l-1.49-1.49A5 5 0 0 0 27.899 24Zm-7 2a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path><svg:path fill="currentColor" d="m14 26.667l-3.234-1.725A8.99 8.99 0 0 1 6 17V4h20v10h2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L14 28.934Z"></svg:path>`,
})
export class CarbonSecurityServicesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
