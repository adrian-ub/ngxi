import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleRightFillIcon],svg[ph-caret-double-right-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m221.66 133.66l-80 80A8 8 0 0 1 128 208v-60.69l-66.34 66.35A8 8 0 0 1 48 208V48a8 8 0 0 1 13.66-5.66L128 108.69V48a8 8 0 0 1 13.66-5.66l80 80a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhCaretDoubleRightFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
