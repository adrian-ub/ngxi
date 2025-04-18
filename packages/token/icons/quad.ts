import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenQuadIcon],svg[token-quad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M19.2 4.8H4.8v14.4h13.128l-3-3H7.8V7.8h8.4v7.128l3 3zM3 3v18h18V3zm6.6 6.6h4.8v4.8H9.6z" clip-rule="evenodd"></svg:path>`,
})
export class TokenQuadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
