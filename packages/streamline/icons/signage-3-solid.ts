import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineSignage3SolidIcon],svg[streamline-signage-3-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m8.202 13.407l2.121-8.34l1.348 5.298h-.888a.75.75 0 0 0 0 1.5h1.27l.391 1.542a.75.75 0 1 0 1.454-.37L11.051 1.844l-.006-.022l-.006-.02a.746.746 0 0 0-.732-.527h-6.63a.75.75 0 0 0-.727.566L.102 13.037a.75.75 0 0 0 .727.935h6.646a.75.75 0 0 0 .727-.565" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineSignage3SolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
