import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRunFillIcon],svg[ri-run-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9.83 8.79L8 9.456V13H6V8.05h.015l5.268-1.918c.244-.093.51-.14.782-.131a2.62 2.62 0 0 1 2.427 1.82q.279.875.51 1.181A5 5 0 0 0 19 11v2a6.99 6.99 0 0 1-5.402-2.547l-.581 3.297L15 15.67V23h-2v-5.986l-2.05-1.987l-.947 4.298l-6.894-1.215l.348-1.97l4.924.868zM13.5 5.5a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></svg:path>`,
})
export class RiRunFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
