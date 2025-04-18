import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMoveOneIcon],svg[icon-park-move-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M8 6L43 25L24 27L13.9948 44L8 6Z"></svg:path>`,
})
export class IconParkMoveOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
