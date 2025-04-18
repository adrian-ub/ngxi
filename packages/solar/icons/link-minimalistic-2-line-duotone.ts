import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLinkMinimalistic2LineDuotoneIcon],svg[solar-link-minimalistic-2-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m14.163 18.488l-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72" opacity=".5"></svg:path><svg:path d="m9.837 14.163l4.326-4.326"></svg:path><svg:path d="m9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72" opacity=".5"></svg:path></svg:g>`,
})
export class SolarLinkMinimalistic2LineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
