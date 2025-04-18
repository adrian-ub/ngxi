import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownDuotoneIcon],svg[ph-caret-double-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 56l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="m213.66 141.66l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 204.69l74.34-74.35a8 8 0 0 1 11.32 11.32m-171.32-80A8 8 0 0 1 48 48h160a8 8 0 0 1 5.66 13.66l-80 80a8 8 0 0 1-11.32 0Zm25 2.34L128 124.69L188.69 64Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
