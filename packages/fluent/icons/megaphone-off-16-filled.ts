import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMegaphoneOff16FilledIcon],svg[fluent-megaphone-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.294 14.001l.852.853a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l3.169 3.168l-2.295.775A1.5 1.5 0 0 0 1 7.217v1.566a1.5 1.5 0 0 0 1.018 1.42L4 10.877V12a3 3 0 0 0 5.872.868l3.146 1.067q.138.046.276.066M5 11.215l3.924 1.332A2 2 0 0 1 5 12zm10 1.3q0 .17-.036.328L6.43 4.308l6.591-2.226A1.5 1.5 0 0 1 15 3.503z"></svg:path>`,
})
export class FluentMegaphoneOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
