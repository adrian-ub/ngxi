import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDgxIcon],svg[token-dgx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 10.875l5.063 5.063L12 21zm0 0V21l-5.062-5.062zM12 3v6.598l-5.726 5.777L3 12.073z"></svg:path><svg:path fill="currentColor" d="m12 3l9 9.073l-3.274 3.302L12 9.598z"></svg:path>`,
})
export class TokenDgxIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
