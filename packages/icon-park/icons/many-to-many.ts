import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkManyToManyIcon],svg[icon-park-many-to-many-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 7H6C4.89543 7 4 7.89543 4 9V39C4 40.1046 4.89543 41 6 41H42C43.1046 41 44 40.1046 44 39V9C44 7.89543 43.1046 7 42 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M30 30V18L38 30V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M10 30V18L18 30V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 20V21"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 27V28"></svg:path></svg:g>`,
})
export class IconParkManyToManyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
