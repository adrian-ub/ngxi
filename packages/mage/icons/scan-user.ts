import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageScanUserIcon],svg[mage-scan-user-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.25 8.814V6.758a3.083 3.083 0 0 0-3.083-3.083h-3.084m0 18.5h3.084a3.083 3.083 0 0 0 3.083-3.083v-2.056m-18.5 0v2.056a3.083 3.083 0 0 0 3.083 3.083h3.084m0-18.5H5.833A3.083 3.083 0 0 0 2.75 6.758v2.056"></svg:path><svg:path d="M18.177 22.175c0-2.92-3.256-5.294-6.177-5.294s-6.176 2.373-6.176 5.294M12 14.234a3.53 3.53 0 1 0 0-7.06a3.53 3.53 0 0 0 0 7.06"></svg:path></svg:g>`,
})
export class MageScanUserIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
