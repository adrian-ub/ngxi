import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenFpisIcon],svg[token-fpis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M4.688 5.002L6.684 3L8.89 5.216a4.74 4.74 0 0 1 2.189-.529h1.844a4.76 4.76 0 0 1 2.189.53L17.316 3l1.997 2.002l-2.2 2.211c.338.652.514 1.375.512 2.11v.939c0 2.56-2.104 4.55-4.703 4.55H9.187V21H6.375V9.317c0-.754.186-1.468.512-2.104zm4.5 4.444A1.99 1.99 0 0 1 11.211 7.5h1.576c1.113 0 2.024.872 2.024 1.946v.608A1.99 1.99 0 0 1 12.788 12h-3.6z" clip-rule="evenodd"></svg:path>`,
})
export class TokenFpisIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
