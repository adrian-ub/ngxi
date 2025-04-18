import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riHotspotFillIcon],svg[ri-hotspot-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 2v9h7v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1zm2 5a2 2 0 0 1 2 2h-2zm0-3a5 5 0 0 1 5 5h-2a3 3 0 0 0-3-3zm0-3a8 8 0 0 1 8 8h-2a6 6 0 0 0-6-6z"></svg:path>`,
})
export class RiHotspotFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
