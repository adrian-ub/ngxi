import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowUpLeftBoldIcon],svg[ph-arrow-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200.49 200.49a12 12 0 0 1-17 0L76 93v75a12 12 0 0 1-24 0V64a12 12 0 0 1 12-12h104a12 12 0 0 1 0 24H93l107.49 107.51a12 12 0 0 1 0 16.98"></svg:path>`,
})
export class PhArrowUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
