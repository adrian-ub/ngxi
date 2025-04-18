import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsLeftToRightListTriangleIcon],svg[hugeicons-left-to-right-list-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.5h10M5.4 16.893C6.467 17.607 7 17.964 7 18.5s-.533.893-1.6 1.607c-1.067.715-1.6 1.072-2 .804S3 19.93 3 18.5s0-2.143.4-2.411s.933.09 2 .804m0-13C6.467 4.607 7 4.964 7 5.5s-.533.893-1.6 1.607c-1.067.715-1.6 1.072-2 .804S3 6.93 3 5.5s0-2.143.4-2.411s.933.09 2 .804M11 12h10m-10 6.5h10" color="currentColor"></svg:path>`,
})
export class HugeiconsLeftToRightListTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
