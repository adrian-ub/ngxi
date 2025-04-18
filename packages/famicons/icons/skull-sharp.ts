import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsSkullSharpIcon],svg[famicons-skull-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 16C141.31 16 48 109.31 48 224v154.83l82 32.81L146.88 496H192v-64h32v64h16v-64h32v64h16v-64h32v64h45.12L382 411.64l82-32.81V224c0-114.69-93.31-208-208-208m-88 320a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m51.51 64L244 320h24l24.49 80ZM344 336a56 56 0 1 1 56-56a56.06 56.06 0 0 1-56 56m104 32"></svg:path>`,
})
export class FamiconsSkullSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
