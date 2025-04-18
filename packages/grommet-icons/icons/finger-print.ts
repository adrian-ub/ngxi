import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsFingerPrintIcon],svg[grommet-icons-finger-print-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14 15a2 2 0 1 0-2 2h0m0 3a5 5 0 1 1 5-5a1.5 1.5 0 0 0 3 0a8 8 0 1 0-8 8h2M1 15c0 2.672.953 5.122 2.537 7.027M20.52 8.042A10.98 10.98 0 0 0 12 4a10.98 10.98 0 0 0-8.464 3.974m14.99-5.363A13.94 13.94 0 0 0 12 1a13.94 13.94 0 0 0-6.481 1.587"></svg:path>`,
})
export class GrommetIconsFingerPrintIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
