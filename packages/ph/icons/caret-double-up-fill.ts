import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpFillIcon],svg[ph-caret-double-up-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34A8 8 0 0 1 208 208H48a8 8 0 0 1-5.66-13.66L108.69 128H48a8 8 0 0 1-5.66-13.66l80-80a8 8 0 0 1 11.32 0l80 80A8 8 0 0 1 208 128h-60.69Z"></svg:path>`,
})
export class PhCaretDoubleUpFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
