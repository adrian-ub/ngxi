import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineTree2Icon],svg[streamline-tree-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M5.5 6.5L7 8v5.5M7 8l1.5-1.5"></svg:path><svg:path d="M7 11.5a5.5 5.5 0 1 0 0-11a5.5 5.5 0 0 0 0 11"></svg:path></svg:g>`,
})
export class StreamlineTree2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
