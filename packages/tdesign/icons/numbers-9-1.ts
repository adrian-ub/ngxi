import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers91Icon],svg[tdesign-numbers-9-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.582 20.5H9.273l3.473-6.052a5.25 5.25 0 1 1 3.573-2.209zm3.402-9.953a3.25 3.25 0 1 0-.354.617z"></svg:path>`,
})
export class TdesignNumbers91Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
