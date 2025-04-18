import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownBoldIcon],svg[ph-caret-double-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M216.49 127.51a12 12 0 0 1 0 17l-80 80a12 12 0 0 1-17 0l-80-80a12 12 0 1 1 17-17L128 199l71.51-71.52a12 12 0 0 1 16.98.03m-97 17a12 12 0 0 0 17 0l80-80a12 12 0 0 0-17-17L128 119L56.49 47.51a12 12 0 0 0-17 17Z"></svg:path>`,
})
export class PhCaretDoubleDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
