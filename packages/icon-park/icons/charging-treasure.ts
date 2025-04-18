import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChargingTreasureIcon],svg[icon-park-charging-treasure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-width="4" d="M9.97506 8.55657C10.1946 7.08729 11.4565 6 12.9421 6H35.9778C37.4979 6 38.7778 7.13694 38.9569 8.64644L42.102 35.1464C42.3138 36.9309 40.9199 38.5 39.1229 38.5H8.98167C7.14822 38.5 5.74362 36.8699 6.01462 35.0566L9.97506 8.55657Z"></svg:path><svg:rect width="36" height="12" x="6" y="30" fill="#2F88FF" stroke="#000" stroke-width="4" rx="6"></svg:rect><svg:rect width="4" height="4" x="19" y="34" fill="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M29 36H35"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M22 12H26"></svg:path></svg:g>`,
})
export class IconParkChargingTreasureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
