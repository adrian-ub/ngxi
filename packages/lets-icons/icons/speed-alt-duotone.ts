import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsSpeedAltDuotoneIcon],svg[lets-icons-speed-alt-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" fill-opacity=".25" fill-rule="evenodd" d="M3.173 13.756a9 9 0 0 0 2.358 4.501c.057.06.153.06.211 0l4.03-4.03a.156.156 0 0 1 .215-.002A3 3 0 0 0 12 15a3 3 0 0 0 2.013-.775a.156.156 0 0 1 .214.002l4.03 4.03a.15.15 0 0 0 .212 0a9 9 0 1 0-15.296-4.501" clip-rule="evenodd"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m12 12l5-3"></svg:path></svg:g>`,
})
export class LetsIconsSpeedAltDuotoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
