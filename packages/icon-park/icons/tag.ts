import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTagIcon],svg[icon-park-tag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M8 44L8 6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V44L24 35.7273L8 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M16 18H32"></svg:path></svg:g>`,
})
export class IconParkTagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
