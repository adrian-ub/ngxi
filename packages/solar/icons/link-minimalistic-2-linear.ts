import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2LinearIcon],svg[solar-link-minimalistic-2-linear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72m4.325 4.325l4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"></svg:path>`,
})
export class SolarLinkMinimalistic2LinearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
