import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenXcadIcon],svg[token-xcad-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.666 11.49L6.324 4.571h4.837l1.701 4.053h.043l3.112-4.053H21l-5.994 7.21l3.553 7.647h-5.003l-1.83-4.655h-.042L8.13 19.429H3z"></svg:path>`,
})
export class TokenXcadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
