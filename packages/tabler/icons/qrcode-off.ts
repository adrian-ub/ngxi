import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerQrcodeOffIcon],svg[tabler-qrcode-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4h1a1 1 0 0 1 1 1v1m-.297 3.711A1 1 0 0 1 9 10H5a1 1 0 0 1-1-1V5c0-.275.11-.524.29-.705M7 17v.01M14 5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1zM7 7v.01M4 15a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm13-8v.01M20 14v.01M14 14v3m0 3h3M3 3l18 18"></svg:path>`,
})
export class TablerQrcodeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
