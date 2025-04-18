import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonConnectSourceIcon],svg[carbon-connect-source-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24 10l-1.414 1.414L26.172 15H11.899A5.01 5.01 0 0 0 8 11.101V2H6v9.101A5 5 0 0 0 6 20.9V30h2v-9.101A5.01 5.01 0 0 0 11.899 17h14.273l-3.586 3.586L24 22l6-6ZM7 19a3 3 0 1 1 3-3a3.003 3.003 0 0 1-3 3"></svg:path>`,
})
export class CarbonConnectSourceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
