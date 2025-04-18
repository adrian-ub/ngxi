import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineBowTieIcon],svg[streamline-bow-tie-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M7 9a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path d="m6.5 8.94l-4.75 1.23a1 1 0 0 1-1.25-1V4.79a1 1 0 0 1 1.25-1L6.5 5.06m1 3.88l4.75 1.23a1 1 0 0 0 1.25-1V4.79a1 1 0 0 0-1.25-1L7.5 5.06"></svg:path></svg:g>`,
})
export class StreamlineBowTieIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
