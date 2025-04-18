import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenDextfIcon],svg[token-dextf-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 18.876V5.124C3 3.948 3.96 3 5.16 3h6.702C16.902 3 21 7.032 21 12s-4.092 9-9.138 9H5.154A2.134 2.134 0 0 1 3 18.876m1.524-5.562l2.928.636L13.8 8.748v8.19l2.4 2.052V6.36l-1.614-.882l-10.062 7.83z"></svg:path>`,
})
export class TokenDextfIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
