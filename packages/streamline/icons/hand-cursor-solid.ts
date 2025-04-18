import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineHandCursorSolidIcon],svg[streamline-hand-cursor-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.784 6.063a2.154 2.154 0 0 1 1.712 2.412l-.657 4.599a1.08 1.08 0 0 1-1.077.926H3.784a1.08 1.08 0 0 1-1.002-.678L1.63 10.457a2.154 2.154 0 0 1 1.077-2.725L4.16 7V1.615a1.615 1.615 0 1 1 3.23 0v3.77z"></svg:path>`,
})
export class StreamlineHandCursorSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
