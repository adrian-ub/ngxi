import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riExpandDiagonal2FillIcon],svg[ri-expand-diagonal-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3h7.5L7.457 6.043l3.25 3.25l-1.414 1.414l-3.25-3.25L3 10.5zm18 18h-7.5l3.043-3.043l-3.25-3.25l1.414-1.414l3.25 3.25L21 13.5z"></svg:path>`,
})
export class RiExpandDiagonal2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
