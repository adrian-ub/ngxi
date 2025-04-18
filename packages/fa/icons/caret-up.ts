import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faCaretUpIcon],svg[fa-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1024 960q0 26-19 45t-45 19H64q-26 0-45-19T0 960t19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45"></svg:path>`,
})
export class FaCaretUpIcon {
  readonly viewBox = input("0 0 1024 1280")
  readonly width = input("0.8em")
  readonly height = input("1em")
}
