import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCodeTextOff16RegularIcon],svg[fluent-code-text-off-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m6.122 4l-1-1H7a.5.5 0 0 1 0 1zM9.5 4h5a.5.5 0 0 0 0-1h-5a.5.5 0 0 0 0 1m.5 2a.5.5 0 0 0 0 1h3.5a.5.5 0 0 0 0-1zm-1 6H1.5a.5.5 0 0 0 0 1H9a.5.5 0 0 0 0-1m5.854 2.145l-13-12.999a.5.5 0 0 0-.708.707L2.292 3H1.5a.5.5 0 0 0 0 1h1.792l2 2H4.5a.5.5 0 0 0 0 1h1.792l2 2H3.5a.5.5 0 0 0 0 1h5.792l4.854 4.854a.5.5 0 0 0 .708 0a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentCodeTextOff16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
