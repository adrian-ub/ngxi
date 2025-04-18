import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenJstIcon],svg[token-jst-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.117 5.118a2.118 2.118 0 1 1-4.235 0a2.118 2.118 0 0 1 4.235 0m0 13.764a2.117 2.117 0 1 1-4.235 0a2.117 2.117 0 0 1 4.235 0m-10.06-5.824h15.884v2.648H4.058z"></svg:path><svg:path fill="currentColor" d="M3.529 3.528C3.73 7.948 7.446 11.47 12 11.47s8.27-3.522 8.471-7.942h-2.665c-.27 2.912-2.767 5.192-5.805 5.192c-3.039 0-5.534-2.28-5.805-5.192z"></svg:path>`,
})
export class TokenJstIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
