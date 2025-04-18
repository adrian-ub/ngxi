import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[makiSquareStrokedIcon],svg[maki-square-stroked-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.7 3.3v8.4H3.3V3.3zM12 2H3a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"></svg:path>`,
})
export class MakiSquareStrokedIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
