import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentZoomOut24RegularIcon],svg[fluent-zoom-out-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.75 9.25a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1 0-1.5zm4.5.75a7.25 7.25 0 1 0-2.681 5.63l4.9 4.9l.085.073a.75.75 0 0 0 .976-1.133l-4.9-4.901A7.22 7.22 0 0 0 17.25 10m-13 0a5.75 5.75 0 1 1 11.5 0a5.75 5.75 0 0 1-11.5 0"></svg:path>`,
})
export class FluentZoomOut24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
