import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[codiconDebugPauseIcon],svg[codicon-debug-pause-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 3H6v10H4.5zm7 0v10H10V3z"></svg:path>`,
})
export class CodiconDebugPauseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
