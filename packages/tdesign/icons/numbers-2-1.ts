import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers21Icon],svg[tdesign-numbers-2-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 8a5 5 0 0 1 5-5h1v.1c2.282.463 4 2.481 4 4.9v.065c0 1.525-.687 2.97-1.871 3.931L9 16.976V18h8v2H7v-3.024a2 2 0 0 1 .739-1.552l6.129-4.98A3.07 3.07 0 0 0 15 8.065V8a3 3 0 1 0-6 0v1H7z"></svg:path>`,
})
export class TdesignNumbers21Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
