import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsPostStatusIcon],svg[dashicons-post-status-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6c0 1.86-1.28 3.41-3 3.86V16c0 1-2 2-2 2V9.86c-1.72-.45-3-2-3-3.86c0-2.21 1.79-4 4-4s4 1.79 4 4M8 5c0 .55.45 1 1 1s1-.45 1-1s-.45-1-1-1s-1 .45-1 1"></svg:path>`,
})
export class DashiconsPostStatusIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
