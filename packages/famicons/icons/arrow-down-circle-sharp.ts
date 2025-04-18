import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsArrowDownCircleSharpIcon],svg[famicons-arrow-down-circle-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 464c114.87 0 208-93.13 208-208S370.87 48 256 48S48 141.13 48 256s93.13 208 208 208m-80.09-224L240 303.58V154h32v149.58L336.09 240l22.54 22.71L256 364.54L153.37 262.7Z"></svg:path>`,
})
export class FamiconsArrowDownCircleSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
