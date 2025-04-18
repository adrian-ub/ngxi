import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonFunctionMathIcon],svg[carbon-function-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 18h-2l-2 3.897L20 18h-2l2.905 5L18 28h2l2-3.799L24 28h2l-2.902-5zM19 6V4h-5.087a1.99 1.99 0 0 0-1.992 1.819L11.27 13H7v2h4.087l-1 11H5v2h5.087a1.99 1.99 0 0 0 1.992-1.819L13.095 15H18v-2h-4.723l.636-7z"></svg:path>`,
})
export class CarbonFunctionMathIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
