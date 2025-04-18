import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChoppingBoardIcon],svg[icon-park-chopping-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M14 8C16.5033 8 35.7176 8 42.0112 8C43.1158 8 44 8.89543 44 10V38C44 39.1046 43.117 40 42.0125 40C35.8575 40 17.3255 40 14 40C10 40 4 38 4 24C4 10 11 8 14 8Z"></svg:path><svg:path stroke="#fff" d="M12 20V28"></svg:path></svg:g>`,
})
export class IconParkChoppingBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
