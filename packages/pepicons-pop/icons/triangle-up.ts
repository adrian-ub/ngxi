import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleUpIcon],svg[pepicons-pop-triangle-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 7.002L5.963 14h8.074zm.866-2.5a1 1 0 0 0-1.732 0L3.365 14.5a1 1 0 0 0 .866 1.5H15.77a1 1 0 0 0 .866-1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopTriangleUpIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
