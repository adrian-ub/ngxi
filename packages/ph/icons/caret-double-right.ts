import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightIcon],svg[ph-caret-double-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m141.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L124.69 128L50.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32m80-11.32l-80-80a8 8 0 0 0-11.32 11.32L204.69 128l-74.35 74.34a8 8 0 0 0 11.32 11.32l80-80a8 8 0 0 0 0-11.32"></svg:path>`,
})
export class PhCaretDoubleRightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
