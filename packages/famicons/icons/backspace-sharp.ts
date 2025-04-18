import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsBackspaceSharpIcon],svg[famicons-backspace-sharp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 96L32 256l112 160h304V96Zm215.3 226.34L336.67 345l-65-65l-65 65L184 322.34l65-65l-65-65l22.63-22.63l65 65l65-65l22.63 22.63l-65 65Z"></svg:path>`,
})
export class FamiconsBackspaceSharpIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
