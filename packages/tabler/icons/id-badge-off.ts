import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerIdBadgeOffIcon],svg[tabler-id-badge-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.141 3.125A3 3 0 0 1 8 3h8a3 3 0 0 1 3 3v9m-.13 3.874A3 3 0 0 1 16 21H8a3 3 0 0 1-3-3V6a3 3 0 0 1 .128-.869"></svg:path><svg:path d="M11.179 11.176a2 2 0 1 0 2.635 2.667M10 6h4M9 18h6M3 3l18 18"></svg:path></svg:g>`,
})
export class TablerIdBadgeOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
