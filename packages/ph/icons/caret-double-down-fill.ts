import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownFillIcon],svg[ph-caret-double-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M215.39 132.94a8 8 0 0 1-1.73 8.72l-80 80a8 8 0 0 1-11.32 0l-80-80A8 8 0 0 1 48 128h60.69L42.34 61.66A8 8 0 0 1 48 48h160a8 8 0 0 1 5.66 13.66L147.31 128H208a8 8 0 0 1 7.39 4.94"></svg:path>`,
})
export class PhCaretDoubleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
