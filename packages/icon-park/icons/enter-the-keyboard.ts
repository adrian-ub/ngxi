import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEnterTheKeyboardIcon],svg[icon-park-enter-the-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 7H6C4.89543 7 4 7.89543 4 9V37C4 38.1046 4.89543 39 6 39H42C43.1046 39 44 38.1046 44 37V9C44 7.89543 43.1046 7 42 7Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 19H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 19H23"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M29 19H36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M12 28H36"></svg:path></svg:g>`,
})
export class IconParkEnterTheKeyboardIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
