import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineVienchartsIcon],svg[icon-park-outline-viencharts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="17" r="12"></svg:circle><svg:circle cx="16" cy="31" r="12"></svg:circle><svg:circle cx="32" cy="31" r="12"></svg:circle></svg:g>`,
})
export class IconParkOutlineVienchartsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
