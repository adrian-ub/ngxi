import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHotspotWaveFilledIcon],svg[tdesign-hotspot-wave-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 0h-1v2h1a7 7 0 0 1 7 7v1h2V9a9 9 0 0 0-9-9m-3 2H4v22h16V12h-2v6H6V4h4zm3.004 18v2.004H11V20z"></svg:path><svg:path fill="currentColor" d="M13 4h-1v2h1a3 3 0 0 1 3 3v1h2V9a5 5 0 0 0-5-5"></svg:path><svg:path fill="currentColor" d="M14.004 8H12v2.004h2.004z"></svg:path>`,
})
export class TdesignHotspotWaveFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
