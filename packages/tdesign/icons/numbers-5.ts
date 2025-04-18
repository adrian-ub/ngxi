import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers5Icon],svg[tdesign-numbers-5-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4H7v7a2 2 0 0 0 2 2h6v5H7v2h8a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2H9V6h8z"></svg:path>`,
})
export class TdesignNumbers5Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
