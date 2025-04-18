import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignNumbers7Icon],svg[tdesign-numbers-7-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4h10.5v3.113a2 2 0 0 1-.52 1.346l-4.48 4.928V20h-2v-6.613a2 2 0 0 1 .52-1.346l4.48-4.928V6H7z"></svg:path>`,
})
export class TdesignNumbers7Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
