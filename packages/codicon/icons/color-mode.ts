import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconColorModeIcon],svg[codicon-color-mode-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1m0 13V2a6 6 0 1 1 0 12"></svg:path>`,
})
export class CodiconColorModeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
