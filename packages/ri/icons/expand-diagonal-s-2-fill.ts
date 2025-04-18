import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandDiagonalS2FillIcon],svg[ri-expand-diagonal-s-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v7.5l3.043-3.043l6.5 6.5L11.5 19H19v-7.5l-3.043 3.043l-6.5-6.5L12.5 5z"></svg:path>`,
})
export class RiExpandDiagonalS2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
