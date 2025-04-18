import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarSoundwaveLineDuotoneIcon],svg[solar-soundwave-line-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M12 4v16"></svg:path><svg:path d="M16 7v10M8 7v10" opacity=".5"></svg:path><svg:path d="M20 11v2M4 11v2"></svg:path></svg:g>`,
})
export class SolarSoundwaveLineDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
