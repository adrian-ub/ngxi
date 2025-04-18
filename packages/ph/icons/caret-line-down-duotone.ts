import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineDownDuotoneIcon],svg[ph-caret-line-down-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m208 72l-80 80l-80-80Z" opacity=".2"></svg:path><svg:path d="M122.34 157.66a8 8 0 0 0 11.32 0l80-80A8 8 0 0 0 208 64H48a8 8 0 0 0-5.66 13.66ZM188.69 80L128 140.69L67.31 80ZM216 192a8 8 0 0 1-8 8H48a8 8 0 0 1 0-16h160a8 8 0 0 1 8 8"></svg:path></svg:g>`,
})
export class PhCaretLineDownDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
