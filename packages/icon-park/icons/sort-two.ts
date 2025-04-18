import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSortTwoIcon],svg[icon-park-sort-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 6V42"></svg:path><svg:path d="M7 17.8994L19 5.89941"></svg:path><svg:path d="M29 42.1006V6.10059"></svg:path><svg:path d="M29 42.1006L41 30.1006"></svg:path></svg:g>`,
})
export class IconParkSortTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
