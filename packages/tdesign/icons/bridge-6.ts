import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBridge6Icon],svg[tdesign-bridge-6-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 1.754l11 9.9l11-9.9V21h-2v-7h-2v7h-2v-7H7v7H5v-7H3v7H1zM3 12h6.394L3 6.245zm11.606 0h6.393L21 6.245z"></svg:path>`,
})
export class TdesignBridge6Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
