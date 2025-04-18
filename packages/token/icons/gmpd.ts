import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenGmpdIcon],svg[token-gmpd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7.615H7.343L3 9h6.655l-3.092 7.384H17.64l2.123-5.077h-6.406l-.582 1.385h4.833L16.638 15H8.724l2.51-6h9.185z"></svg:path>`,
})
export class TokenGmpdIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
