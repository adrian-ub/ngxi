import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faTerminalIcon],svg[fa-terminal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m585 727l-466 466q-10 10-23 10t-23-10l-50-50q-10-10-10-23t10-23l393-393L23 311q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l466 466q10 10 10 23t-10 23m1079 457v64q0 14-9 23t-23 9H672q-14 0-23-9t-9-23v-64q0-14 9-23t23-9h960q14 0 23 9t9 23"></svg:path>`,
})
export class FaTerminalIcon {
  readonly viewBox = input("0 0 1664 1280")
  readonly width = input("1.3em")
  readonly height = input("1em")
}
