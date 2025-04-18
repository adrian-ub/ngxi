import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineConditionerIcon],svg[icon-park-outline-conditioner-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M8 24h32v20H8zm29 0v-7H11v7m6-7q3-3.25 3-13c3 0 10 5.417 10 12.733"></svg:path><svg:path d="M16 31h16v6H16z"></svg:path></svg:g>`,
})
export class IconParkOutlineConditionerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
