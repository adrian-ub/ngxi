import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSignal2Icon],svg[bx-signal-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 16h2v5H3zm4-3h2v8H7z"></svg:path>`,
})
export class BxSignal2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
