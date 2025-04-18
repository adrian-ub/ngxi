import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiChevronUpIcon],svg[zmdi-chevron-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m128 107l128 128l-30 30l-98-98l-98 98l-30-30z"></svg:path>`,
})
export class ZmdiChevronUpIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
