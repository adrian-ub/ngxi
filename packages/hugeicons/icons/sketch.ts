import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsSketchIcon],svg[hugeicons-sketch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M17 9.5L12 3L7 9.5L12 21z"></svg:path><svg:path d="M17.5 4L22 9.5h-5m.5-5.5L17 9.5m.5-5.5L12 3L6.5 4M17 9.5H7M6.5 4L2 9.5h5M6.5 4L7 9.5m15 0L12 21L2 9.5"></svg:path></svg:g>`,
})
export class HugeiconsSketchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
