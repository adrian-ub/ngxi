import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronDownIcon],svg[zmdi-chevron-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m226 119l30 30l-128 128L0 149l30-30l98 98z"></svg:path>`,
})
export class ZmdiChevronDownIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
