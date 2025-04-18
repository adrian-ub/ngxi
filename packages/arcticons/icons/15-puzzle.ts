import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticons15PuzzleIcon],svg[arcticons-15-puzzle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m15.758 18.906l3.5-1.906v14m4.409-1.18c.967.809 1.904 1.18 4.248 1.18h.402a3.925 3.925 0 0 0 3.925-3.925h0a3.925 3.925 0 0 0-3.925-3.925h-4.65V17h8.575"></svg:path>`,
})
export class Arcticons15PuzzleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
