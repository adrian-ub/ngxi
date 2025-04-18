import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers51Icon],svg[tdesign-numbers-5-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 4H16v2H9.5v4H12a5 5 0 0 1 4.9 4h.1v1a5 5 0 0 1-5 5h-.5a5 5 0 0 1-5-5h2a3 3 0 0 0 3 3h.5a3 3 0 1 0 0-6H7.5z"></svg:path>`,
})
export class TdesignNumbers51Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
