import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownBoldIcon],svg[ph-caret-line-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M39.51 80.49a12 12 0 0 1 17-17L128 135l71.51-71.52a12 12 0 0 1 17 17l-80 80a12 12 0 0 1-17 0ZM208 180H48a12 12 0 0 0 0 24h160a12 12 0 0 0 0-24"></svg:path>`,
})
export class PhCaretLineDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
