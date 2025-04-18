import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHotspotWaveIcon],svg[tdesign-hotspot-wave-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 0h1a9 9 0 0 1 9 9v1h-2V9a7 7 0 0 0-7-7h-1zM4 2h6v2H6v18h12V12h2v12H4zm8 2h1a5 5 0 0 1 5 5v1h-2V9a3 3 0 0 0-3-3h-1zm0 4h2.004v2.004H12z"></svg:path>`,
})
export class TdesignHotspotWaveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
