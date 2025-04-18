import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChargingTreasureIcon],svg[icon-park-outline-charging-treasure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-width="4" d="M9.975 8.557A3 3 0 0 1 12.942 6h23.036a3 3 0 0 1 2.979 2.646l3.145 26.5a3 3 0 0 1-2.98 3.354H8.983a3 3 0 0 1-2.967-3.443z"></svg:path><svg:rect width="36" height="12" x="6" y="30" stroke="currentColor" stroke-width="4" rx="6"></svg:rect><svg:rect width="4" height="4" x="19" y="34" fill="currentColor" rx="2"></svg:rect><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 36h6M22 12h4"></svg:path></svg:g>`,
})
export class IconParkOutlineChargingTreasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
