import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEqualOff16FilledIcon],svg[fluent-equal-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10.293 11l3.853 3.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L3.793 4.5H2.75a.75.75 0 0 0 0 1.5h2.543l3.5 3.5H2.75a.75.75 0 0 0 0 1.5zm1.328-1.5l1.5 1.5h.129a.75.75 0 0 0 0-1.5zm-5-5l1.5 1.5h5.129a.75.75 0 0 0 0-1.5z"></svg:path>`,
})
export class FluentEqualOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
