import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineUpDuotoneIcon],svg[ph-caret-line-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 192H48l80-80Z" opacity=".2"></svg:path><svg:path d="M133.66 106.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 200h160a8 8 0 0 0 5.66-13.66ZM67.31 184L128 123.31L188.69 184ZM40 72a8 8 0 0 1 8-8h160a8 8 0 0 1 0 16H48a8 8 0 0 1-8-8"></svg:path></svg:g>`,
})
export class PhCaretLineUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
