import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCaretSquareDownSolidIcon],svg[la-caret-square-down-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm3.719 5.781L9.28 14.22l6 6l.719.687l.719-.687l6-6l-1.438-1.438l-5.28 5.28z"></svg:path>`,
})
export class LaCaretSquareDownSolidIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
