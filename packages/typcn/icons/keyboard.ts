import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[typcnKeyboardIcon],svg[typcn-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 13h7v2H8zm-3 0h2v2H5zm0-4h2v1H5zm3 3v-1H5v1h2zm0-3h1v1H8zm1 2h1v1H9zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 2h1v1h-1zm1-2h1v1h-1zm1 3h2V9h-1v2h-1zm1 1h-1v1h-1v1h3v-1h-1zm2-7H4c-1.1 0-2 .9-2 2v8c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m0 10H4V8h16z"></svg:path>`,
})
export class TypcnKeyboardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
