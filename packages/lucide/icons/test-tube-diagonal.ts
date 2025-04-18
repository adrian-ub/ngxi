import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideTestTubeDiagonalIcon],svg[lucide-test-tube-diagonal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 7L6.82 21.18a2.83 2.83 0 0 1-3.99-.01a2.83 2.83 0 0 1 0-4L17 3m-1-1l6 6m-10 8H4"></svg:path>`,
})
export class LucideTestTubeDiagonalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
