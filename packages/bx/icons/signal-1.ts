import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSignal1Icon],svg[bx-signal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3z"></svg:path>`,
})
export class BxSignal1Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
