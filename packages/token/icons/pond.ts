import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPondIcon],svg[token-pond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M14.64 6.356A1.22 1.22 0 0 0 13.777 6h-.003a1.22 1.22 0 0 0-.864.36l-9.552 9.56a1.2 1.2 0 0 0-.357.864c.001.325.129.631.361.861a1.2 1.2 0 0 0 .863.356c.328 0 .637-.128.869-.36l9.551-9.56a1.22 1.22 0 0 0-.003-1.725m5.599-.263a1.23 1.23 0 0 0-1.34.267l-9.583 9.56c-.23.23-.32.54-.318.864c0 .323.092.633.323.861a1.234 1.234 0 0 0 1.737-.005l7.44-7.465v6.606c0 .323.173.633.403.862a1.234 1.234 0 0 0 1.737 0c.23-.229.36-.539.36-.862V7.22a1.22 1.22 0 0 0-.759-1.128" clip-rule="evenodd"></svg:path>`,
})
export class TokenPondIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
