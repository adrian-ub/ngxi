import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCheckSquareIcon],svg[la-check-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5v22h22V5zm2 2h18v18H7zm14.281 4.281L14 18.562l-3.281-3.28l-1.438 1.437l4 4l.719.687l.719-.687l8-8z"></svg:path>`,
})
export class LaCheckSquareIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
