import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopTriangleDownIcon],svg[pepicons-pop-triangle-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 12.998L14.037 6H5.963zm-.866 2.5a1 1 0 0 0 1.732 0L16.635 5.5a1 1 0 0 0-.866-1.5H4.23a1 1 0 0 0-.866 1.5z" clip-rule="evenodd"></svg:path>`,
})
export class PepiconsPopTriangleDownIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
