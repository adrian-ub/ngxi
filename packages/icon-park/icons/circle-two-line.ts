import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCircleTwoLineIcon],svg[icon-park-circle-two-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M40 12C42.2091 12 44 10.2091 44 8C44 5.79086 42.2091 4 40 4C37.7909 4 36 5.79086 36 8C36 10.2091 37.7909 12 40 12Z"></svg:path><svg:path fill="#2F88FF" d="M8 44C10.2091 44 12 42.2091 12 40C12 37.7909 10.2091 36 8 36C5.79086 36 4 37.7909 4 40C4 42.2091 5.79086 44 8 44Z"></svg:path><svg:path stroke-linecap="round" d="M40 20V40H20"></svg:path><svg:path stroke-linecap="round" d="M8 28V8H28"></svg:path></svg:g>`,
})
export class IconParkCircleTwoLineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
