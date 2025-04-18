import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCaretLeftIcon],svg[fa-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M576 192v896q0 26-19 45t-45 19t-45-19L19 685Q0 666 0 640t19-45l448-448q19-19 45-19t45 19t19 45"></svg:path>`,
})
export class FaCaretLeftIcon {
  readonly viewBox = input("0 0 576 1280")
  readonly width = input("0.45em")
  readonly height = input("1em")
}
