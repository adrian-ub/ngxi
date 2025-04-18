import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugContinueIcon],svg[codicon-debug-continue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 2H4v12H2.5zm4.936.39L6.25 3v10l1.186.61l7-5V7.39zM12.71 8l-4.96 3.543V4.457z" clip-rule="evenodd"></svg:path>`,
})
export class CodiconDebugContinueIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
