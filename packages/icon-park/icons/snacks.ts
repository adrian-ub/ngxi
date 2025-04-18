import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSnacksIcon],svg[icon-park-snacks-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M6 14H42V8H38L36 4H12L10 8H6V14Z"></svg:path><svg:path stroke-linecap="round" d="M36 44L38 14H10L12 44H36Z"></svg:path></svg:g>`,
})
export class IconParkSnacksIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
