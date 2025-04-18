import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fontistoCenterAlignIcon],svg[fontisto-center-align-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.334 2.666h26.665l.037.001a1.334 1.334 0 1 0 0-2.668L27.997 0h.002H1.334a1.334 1.334 0 0 0-.002 2.666zm3.555 2.667l-.037-.001a1.334 1.334 0 1 0 0 2.668l.039-.001h-.002h19.555a1.334 1.334 0 0 0 .002-2.666h-.002zm23.11 5.334H1.334a1.334 1.334 0 0 0-.002 2.666h26.667a1.334 1.334 0 0 0 .002-2.666zm0 10.666H1.334a1.334 1.334 0 0 0-.002 2.666h26.667a1.334 1.334 0 0 0 .002-2.666zm-3.555-2.667A1.334 1.334 0 0 0 24.446 16H4.889a1.334 1.334 0 0 0-.002 2.666h.002z"></svg:path>`,
})
export class FontistoCenterAlignIcon {
  readonly viewBox = input("0 0 29 24")
  readonly width = input("1.21em")
  readonly height = input("1em")
}
