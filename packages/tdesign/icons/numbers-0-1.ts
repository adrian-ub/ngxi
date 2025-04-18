import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers01Icon],svg[tdesign-numbers-0-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 9a5 5 0 0 0-5-5h-1v.1A5 5 0 0 0 7 9v6a5 5 0 0 0 10 0zm-5-3a3 3 0 0 1 3 3v6a3 3 0 1 1-6 0V9a3 3 0 0 1 3-3"></svg:path>`,
})
export class TdesignNumbers01Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
