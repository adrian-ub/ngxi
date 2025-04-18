import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentReplay16FilledIcon],svg[fluent-replay-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.5 3.668V2.5a.5.5 0 0 0-1 0v3A.5.5 0 0 0 2 6h2.5a.5.5 0 0 0 0-1H2.802a6 6 0 1 1-.782 3.5a.534.534 0 0 0-.52-.5a.474.474 0 0 0-.483.5A7 7 0 1 0 2.5 3.668m4.996 1.465A1 1 0 0 0 6 6.001V10a1 1 0 0 0 1.496.868l3.498-2a1 1 0 0 0 0-1.736z"></svg:path>`,
})
export class FluentReplay16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
