import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowUpIcon],svg[zmdi-long-arrow-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 384V82l-77 76l-30-30L128 0l128 128l-30 30l-77-76v302z"></svg:path>`,
})
export class ZmdiLongArrowUpIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
