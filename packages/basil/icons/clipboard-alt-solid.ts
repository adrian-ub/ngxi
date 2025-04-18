import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[basilClipboardAltSolidIcon],svg[basil-clipboard-alt-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M8.25 5A2.75 2.75 0 0 1 11 2.25h2A2.75 2.75 0 0 1 15.75 5v2a.75.75 0 0 1-.75.75H9A.75.75 0 0 1 8.25 7zM11 3.75c-.69 0-1.25.56-1.25 1.25v1.25h4.5V5c0-.69-.56-1.25-1.25-1.25z"></svg:path><svg:path d="M6.487 4.929c.126-.06.267.036.266.176L6.75 7A2.25 2.25 0 0 0 9 9.25h6A2.25 2.25 0 0 0 17.25 7V5.104c0-.14.14-.236.267-.175A3.5 3.5 0 0 1 19.5 8.085v10.49a3.39 3.39 0 0 1-2.972 3.365a36.6 36.6 0 0 1-9.056 0A3.39 3.39 0 0 1 4.5 18.575V8.085a3.5 3.5 0 0 1 1.987-3.156M15 12a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 9 12zm-1 3a.75.75 0 0 1 0 1.5H9A.75.75 0 0 1 9 15z"></svg:path></svg:g>`,
})
export class BasilClipboardAltSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
