import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVideoIcon],svg[icon-park-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H42C43.1046 8 44 8.89543 44 10V38C44 39.1046 43.1046 40 42 40H6C4.89543 40 4 39.1046 4 38V10Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 8V40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 8V40"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 18H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M38 30H44"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 18H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 16V20"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 8H15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M9 40H15"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 8H39"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M33 40H39"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M4 30H10"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 28V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 28V32"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 16V20"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M21 19L29 24L21 29V19Z"></svg:path></svg:g>`,
})
export class IconParkVideoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
