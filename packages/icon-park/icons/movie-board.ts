import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMovieBoardIcon],svg[icon-park-movie-board-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 16H4V42H44V16Z"></svg:path><svg:path stroke="#000" d="M44 16V6H4V16H44Z"></svg:path><svg:path stroke="#000" d="M26 6L30 16"></svg:path><svg:path stroke="#000" d="M18 6L22 16"></svg:path><svg:path stroke="#000" d="M10 6L14 16"></svg:path><svg:path stroke="#000" d="M34 6L38 16"></svg:path><svg:path stroke="#fff" d="M12 24H36"></svg:path><svg:path stroke="#fff" d="M12 32H24"></svg:path></svg:g>`,
})
export class IconParkMovieBoardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
