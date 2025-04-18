import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomOut24FilledIcon],svg[fluent-zoom-out-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 10a7.5 7.5 0 1 0-2.952 5.964l4.745 4.743l.094.083a1 1 0 0 0 1.32-1.497l-4.743-4.745A7.47 7.47 0 0 0 17.5 10m-4-1a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2z"></svg:path>`,
})
export class FluentZoomOut24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
