import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineToastIcon],svg[streamline-toast-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M10.5 4A2.5 2.5 0 0 0 8 1.5H3A2.5 2.5 0 0 0 1.5 6v5.5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6a2.49 2.49 0 0 0 1-2"></svg:path><svg:path d="M5 1.5h6A2.5 2.5 0 0 1 12.5 6v5.5a1 1 0 0 1-1 1h-7m8-6.5h-3"></svg:path></svg:g>`,
})
export class StreamlineToastIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
