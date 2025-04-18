import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPeopleSearchOneIcon],svg[icon-park-people-search-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="11" r="7" fill="#2F88FF" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 41C4 32.1634 12.0589 25 22 25"></svg:path><svg:circle cx="35" cy="34" r="6" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 38L44 41"></svg:path></svg:g>`,
})
export class IconParkPeopleSearchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
