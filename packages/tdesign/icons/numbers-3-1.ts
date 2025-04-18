import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers31Icon],svg[tdesign-numbers-3-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4h9v3.02l-4.264 2.986A5 5 0 0 1 12 20h-.5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3h.5a3 3 0 1 0 0-6H9.5V9.48L14.47 6H7.5z"></svg:path>`,
})
export class TdesignNumbers31Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
