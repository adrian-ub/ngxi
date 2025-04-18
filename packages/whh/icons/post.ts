import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhPostIcon],svg[whh-post-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M855.048 768h-215l-256 256V768h-215q-57 0-113-57t-56-115V172q0-58 56-115t113-57h686q57 0 113 57t56 115v424q0 58-56 115t-113 57m41-541q0-41-29-70t-69-29h-572q-41 0-69.5 29t-28.5 70v314q0 41 28.5 70t69.5 29h572q40 0 69-29t29-70z"></svg:path>`,
})
export class WhhPostIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
