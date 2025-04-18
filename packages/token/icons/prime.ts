import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenPrimeIcon],svg[token-prime-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.5 4h-3v8.75l1.5.75l1.5-.75zM6 8.5H3l.95 4.27a.5.5 0 0 0 .265.335l2.23 1.12A1 1 0 0 1 7 15.12v3.38l3.5 1.5v-4.25l-2.8-1.29a1 1 0 0 1-.555-.7zM13.5 20v-4.25l2.8-1.29a1 1 0 0 0 .555-.7L18 8.5h3l-.95 4.27a.5.5 0 0 1-.265.335l-2.23 1.12a1 1 0 0 0-.555.895v3.38z"></svg:path>`,
})
export class TokenPrimeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
