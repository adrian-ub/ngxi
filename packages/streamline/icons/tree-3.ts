import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTree3Icon],svg[streamline-tree-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M9.24 1.359a3.5 3.5 0 0 1 1.18 2.127h.08a3 3 0 0 1 0 6h-7a3 3 0 1 1 0-6A3.5 3.5 0 0 1 9.24 1.36Z"></svg:path><svg:path d="m5.42 6.486l1.5 1.5v5.5m0-5.5l1.5-1.5"></svg:path></svg:g>`,
})
export class StreamlineTree3Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
