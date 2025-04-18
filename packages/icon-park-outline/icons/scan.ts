import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineScanIcon],svg[icon-park-outline-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M7 24h34M24 7v34"></svg:path><svg:path fill="currentColor" d="M5 5h4v4H5zm9 0h4v4h-4zm16 0h4v4h-4zm9 0h4v4h-4zm0 9h4v4h-4zM5 14h4v4H5zm0 25h4v4H5zm9 0h4v4h-4zm16 0h4v4h-4zm9 0h4v4h-4zm0-9h4v4h-4zM5 30h4v4H5z"></svg:path></svg:g>`,
})
export class IconParkOutlineScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
