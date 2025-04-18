import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenHardIcon],svg[token-hard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.385 3h3.461v6.923h8.308V3h3.462v18h-3.462v-7.615H7.846V21H4.385z"></svg:path>`,
})
export class TokenHardIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
