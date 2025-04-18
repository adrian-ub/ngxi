import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandDiagonalSFillIcon],svg[ri-expand-diagonal-s-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 5h-7.5l3.043 3.043l-6.5 6.5L5 11.5V19h7.5l-3.043-3.043l6.5-6.5L19 12.5z"></svg:path>`,
})
export class RiExpandDiagonalSFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
