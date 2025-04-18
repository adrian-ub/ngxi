import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleLeftFillIcon],svg[ph-caret-circle-double-left-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.42a104 104 0 1 0 0 147.15a104.17 104.17 0 0 0 0-147.15m-83.92 99.93a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L91.29 128Zm56 0a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L147.32 128Z"></svg:path>`,
})
export class PhCaretCircleDoubleLeftFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
