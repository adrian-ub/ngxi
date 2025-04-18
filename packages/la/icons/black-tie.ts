import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laBlackTieIcon],svg[la-black-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm5 2l2.813 3.625L12 20.375L16 24l4-3.625l-2.813-7.75L20 9z"></svg:path>`,
})
export class LaBlackTieIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
