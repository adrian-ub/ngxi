import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSplit16RegularIcon],svg[fluent-arrow-split-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2a.5.5 0 0 1 .5.5V6h2A1.5 1.5 0 0 1 12 7.5v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L11 12.293V7.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5v4.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L4 12.293V7.5A1.5 1.5 0 0 1 5.5 6h2V2.5A.5.5 0 0 1 8 2"></svg:path>`,
})
export class FluentArrowSplit16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
