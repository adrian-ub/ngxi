import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilMinusSquareFullIcon],svg[uil-minus-square-full-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 13h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2M21 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1m-1 18H4V4h16Z"></svg:path>`,
})
export class UilMinusSquareFullIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
