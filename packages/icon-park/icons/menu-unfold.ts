import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMenuUnfoldIcon],svg[icon-park-menu-unfold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 11H40"></svg:path><svg:path d="M8 24H42"></svg:path><svg:path d="M8 37H40"></svg:path><svg:path d="M36.3433 29.6568L42.0001 23.9999L36.3433 18.343"></svg:path></svg:g>`,
})
export class IconParkMenuUnfoldIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
