import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedWsiIcon],svg[token-branded-wsi-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#013662" d="M10.5 3H9v7l1.5-3.99zM7.465 6.5H4.5l3.4 11h2.515l1.565-5.13l1.605 5.13H16.1l3.4-11h-2.905l-1.77 5.48l-1.71-5.48h-2.23l-1.77 5.48zM15 3h-1.5v3.01L15 10zM9 18h1.5v3H9zm6 0h-1.5v3H15z"></svg:path>`,
})
export class TokenBrandedWsiIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
