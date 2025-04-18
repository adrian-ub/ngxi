import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCodeIcon],svg[zmdi-code-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m158 290l-30 30L0 192L128 64l30 30l-98 98zm111 0l98-98l-98-98l30-30l128 128l-128 128z"></svg:path>`,
})
export class ZmdiCodeIcon {
  readonly viewBox = input("0 0 432 384")
  readonly width = input("1.13em")
  readonly height = input("1em")
}
