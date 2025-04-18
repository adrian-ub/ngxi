import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpThinIcon],svg[ph-caret-double-up-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M210.83 197.17a4 4 0 0 1-5.66 5.66L128 125.66l-77.17 77.17a4 4 0 0 1-5.66-5.66l80-80a4 4 0 0 1 5.66 0Zm-160-74.34L128 45.66l77.17 77.17a4 4 0 1 0 5.66-5.66l-80-80a4 4 0 0 0-5.66 0l-80 80a4 4 0 0 0 5.66 5.66"></svg:path>`,
})
export class PhCaretDoubleUpThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
