import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ggArrowLongDownLIcon],svg[gg-arrow-long-down-l-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8.998.972v2h3l-1 .001l.014 16.24l-1.844-1.834l-1.41 1.418l4.254 4.23l4.23-4.254l-1.417-1.41l-1.813 1.823l-.014-16.214h2v-2z"></svg:path>`,
})
export class GgArrowLongDownLIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
