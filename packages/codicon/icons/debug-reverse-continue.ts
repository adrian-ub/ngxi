import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugReverseContinueIcon],svg[codicon-debug-reverse-continue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M13.5 2H12v12h1.5zm-4.936.39L9.75 3v10l-1.186.61l-7-5V7.39zM3.29 8l4.96 3.543V4.457z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDebugReverseContinueIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
