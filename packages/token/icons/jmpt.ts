import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenJmptIcon],svg[token-jmpt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.737 6.79L14.605 3l-2.131 3.79h.947v10.705a1.421 1.421 0 0 1-2.842 0v-6.916h.947l-2.131-3.79l-2.132 3.79h.948v7.082C8.21 19.508 9.646 21 11.413 21h1.174c1.767 0 3.203-1.497 3.203-3.34V6.79z"></svg:path>`,
})
export class TokenJmptIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
