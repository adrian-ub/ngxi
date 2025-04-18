import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftThinIcon],svg[ph-caret-double-left-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M202.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L125.66 128ZM45.66 128l77.17-77.17a4 4 0 0 0-5.66-5.66l-80 80a4 4 0 0 0 0 5.66l80 80a4 4 0 1 0 5.66-5.66Z"></svg:path>`,
})
export class PhCaretDoubleLeftThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
