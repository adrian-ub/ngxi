import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenMpsIcon],svg[token-mps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 3h-1.33a3.75 3.75 0 0 1-3.605 3.81h-.13A3.75 3.75 0 0 1 8.33 3H7c0 1.925 1.01 3.6 2.505 4.5C8.005 8.4 7 10.075 7 12s1.01 3.6 2.505 4.5C8.005 17.4 7 19.075 7 21h1.33a3.75 3.75 0 0 1 3.61-3.81h.12A3.75 3.75 0 0 1 15.67 21H17c0-1.925-1.01-3.6-2.505-4.5C15.995 15.6 17 13.925 17 12s-1.01-3.6-2.505-4.5C15.995 6.6 17 4.925 17 3m-1.33 9a3.75 3.75 0 0 1-3.61 3.81h-.12A3.75 3.75 0 0 1 8.33 12a3.75 3.75 0 0 1 3.605-3.81h.13A3.75 3.75 0 0 1 15.67 12"></svg:path>`,
})
export class TokenMpsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
