import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidWeixinScanIcon],svg[icon-park-solid-weixin-scan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 30H12l2 5h12l2.088 6.265A4 4 0 0 0 31.883 44H38a4 4 0 0 0 4-4V30l1-7l-3.646.73a2 2 0 0 0-1.58 1.632zM11 18h25l-2-5H22l-2.088-6.265A4 4 0 0 0 16.117 4H10a4 4 0 0 0-4 4v10l-1 7l3.646-.73a2 2 0 0 0 1.58-1.632z"></svg:path>`,
})
export class IconParkSolidWeixinScanIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
