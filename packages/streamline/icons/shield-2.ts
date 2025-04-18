import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShield2Icon],svg[streamline-shield-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m7.92 13.21l-.59.23a.94.94 0 0 1-.66 0l-.59-.23A8 8 0 0 1 1 5.78V3A6.36 6.36 0 0 0 7 .5c1.25 1.82 3.32 2.68 6 2.5v2.78a8 8 0 0 1-5.08 7.43"></svg:path>`,
})
export class StreamlineShield2Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
