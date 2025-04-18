import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenIceIcon],svg[token-ice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m4.923 10.493l.62 4.23l4.707.326l2.835-5.355l-1.248-4.354l-1.93-2.295h-.529L8.343 3.9L7.297 7.5z"></svg:path><svg:path fill="currentColor" d="m17.457 20l-1.508.983l-3.611-10.952l-.175-3.498L9.857 3l3.656 2.734l1.052 2.008l2.098.827l2.65 6.086z"></svg:path><svg:path fill="currentColor" d="m8.608 14.587l-3.234-.22l-.687 2.054L6.684 21h9.265l1.31-6.058l-2.84-4.225l-2.138-.765v.445l-3.673 4.185z"></svg:path>`,
})
export class TokenIceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
