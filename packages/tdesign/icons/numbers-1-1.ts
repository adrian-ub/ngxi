import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers11Icon],svg[tdesign-numbers-1-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 20V3.5h-1.834L8.1 5.8l1.2 1.6L11 6.125V20z"></svg:path>`,
})
export class TdesignNumbers11Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
