import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePesticideIcon],svg[icon-park-outline-pesticide-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linejoin="round" d="M15 11.368V4h18v7.368l6 6.119V42a2 2 0 0 1-2 2H11a2 2 0 0 1-2-2V17.486z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 23h8v12H9"></svg:path><svg:path stroke-linecap="round" d="M15 11.5h18M31 23v6m0 5v1"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M9 38V20"></svg:path></svg:g>`,
})
export class IconParkOutlinePesticideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
