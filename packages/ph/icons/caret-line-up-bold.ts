import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpBoldIcon],svg[ph-caret-line-up-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 183.51a12 12 0 0 1-17 17L128 129l-71.51 71.49a12 12 0 0 1-17-17l80-80a12 12 0 0 1 17 0ZM48 84h160a12 12 0 0 0 0-24H48a12 12 0 0 0 0 24"></svg:path>`,
})
export class PhCaretLineUpBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
