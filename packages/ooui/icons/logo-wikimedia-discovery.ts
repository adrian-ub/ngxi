import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiLogoWikimediaDiscoveryIcon],svg[ooui-logo-wikimedia-discovery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 17c0 1.1-2 2-2 2s-2-.9-2-2m2-10a1.54 1.54 0 0 1-1.5-1.5a1.5 1.5 0 0 1 3 0A1.54 1.54 0 0 1 10 7m3.3 4.7C14.1 7.9 12.7 1 10 1S5.8 7.7 6.6 11.5L5 15h2.7l.3 1h4c.2-.3.1-.5.3-1H15z"></svg:path>`,
})
export class OouiLogoWikimediaDiscoveryIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
