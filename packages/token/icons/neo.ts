import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenNeoIcon],svg[token-neo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.206 21l-6.883-2.859V6.23L13.498 3l6.078 2.827l-8.37 2.997z"></svg:path><svg:path fill="currentColor" d="m19.677 17.823l-7.942-3.261V9.268l7.942-2.955z"></svg:path>`,
})
export class TokenNeoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
