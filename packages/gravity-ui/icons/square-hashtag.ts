import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiSquareHashtagIcon],svg[gravity-ui-square-hashtag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.5 3h-7A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3m-7-1.5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3zm5.623 2.76a.75.75 0 0 1 .617.863l-.105.627h.865a.75.75 0 0 1 0 1.5h-1.115l-.25 1.5H11a.75.75 0 0 1 0 1.5H9.885l-.145.873a.75.75 0 1 1-1.48-.246l.105-.627h-1.48l-.145.873a.75.75 0 1 1-1.48-.246l.105-.627H4.5a.75.75 0 0 1 0-1.5h1.115l.25-1.5H5a.75.75 0 0 1 0-1.5h1.115l.145-.873a.75.75 0 1 1 1.48.246l-.105.627h1.48l.145-.873a.75.75 0 0 1 .863-.617M7.135 8.75h1.48l.25-1.5h-1.48z" clip-rule="evenodd"></svg:path>`,
})
export class GravityUiSquareHashtagIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
