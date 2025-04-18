import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenRlyIcon],svg[token-rly-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.941 7.5L12 3L4.059 7.5v9L12 21l7.941-4.5zm-2.648 1.059l-5.295-2.912l-5.294 2.912v5.823l2.647 1.456V10.23l2.647-1.406l2.643 1.404l2.652-1.65z" clip-rule="evenodd"></svg:path>`,
})
export class TokenRlyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
