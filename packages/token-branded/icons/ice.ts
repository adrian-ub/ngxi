import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedIceIcon],svg[token-branded-ice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#66E2FF" d="m4.923 10.493l.619 4.23l4.708.326l2.835-5.355l-1.249-4.354l-1.929-2.295h-.529L8.343 3.9L7.297 7.5z"></svg:path><svg:path fill="#21B3D3" d="m17.456 20l-1.507.983l-3.612-10.952l-.174-3.498L9.857 3l3.656 2.734l1.052 2.008l2.098.827l2.65 6.086z"></svg:path><svg:path fill="#3FDCFF" d="m8.608 14.587l-3.234-.22l-.686 2.054L6.684 21h9.265l1.31-6.058l-2.84-4.225l-2.138-.765v.444l-3.673 4.185z"></svg:path></svg:g>`,
})
export class TokenBrandedIceIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
