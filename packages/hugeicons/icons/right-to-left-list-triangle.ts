import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsRightToLeftListTriangleIcon],svg[hugeicons-right-to-left-list-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5.5h10m5.6 11.393c-1.067.714-1.6 1.071-1.6 1.607s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804s.4-.982.4-2.411s0-2.143-.4-2.411s-.933.09-2 .804m0-13C17.533 4.607 17 4.964 17 5.5s.533.893 1.6 1.607c1.067.715 1.6 1.072 2 .804S21 6.93 21 5.5s0-2.143-.4-2.411s-.933.09-2 .804M3 12h10M3 18.5h10" color="currentColor"></svg:path>`,
})
export class HugeiconsRightToLeftListTriangleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
