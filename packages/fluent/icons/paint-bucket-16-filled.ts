import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaintBucket16FilledIcon],svg[fluent-paint-bucket-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 1.5a.5.5 0 0 0-1 0v.838c-.252.064-.49.195-.687.392L1.337 7.706a1.5 1.5 0 0 0-.026 2.096l3.62 3.8a1.5 1.5 0 0 0 2.147.027l5.068-5.068a1.5 1.5 0 0 0 0-2.122L8.434 2.73Q8.237 2.537 8 2.429zM11.293 8H2.457L7 3.457V4.5a.5.5 0 1 0 1 0v-.79l3.439 3.437a.5.5 0 0 1 0 .707zm1.628 2.222a.56.56 0 0 0-.842 0l-1.15 1.315C9.747 12.887 10.705 15 12.5 15s2.753-2.113 1.572-3.463z"></svg:path>`,
})
export class FluentPaintBucket16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
