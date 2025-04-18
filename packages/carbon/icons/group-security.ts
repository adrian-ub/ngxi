import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGroupSecurityIcon],svg[carbon-group-security-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 21H9v-2a3.003 3.003 0 0 1 3-3h6v2h-6a1 1 0 0 0-1 1zm4-6a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m9 13a4 4 0 1 1 4-4a4.005 4.005 0 0 1-4 4m0-6a2 2 0 1 0 2 2a2 2 0 0 0-2-2m6 12h-2v-2a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v2h-2v-2a3.003 3.003 0 0 1 3-3h6a3.003 3.003 0 0 1 3 3z"></svg:path><svg:path fill="currentColor" d="m14 27.733l-5.234-2.79A8.99 8.99 0 0 1 4 17V4h20v6h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v13a10.98 10.98 0 0 0 5.824 9.707L14 30Z"></svg:path>`,
})
export class CarbonGroupSecurityIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
