import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineRightDuotoneIcon],svg[ph-caret-line-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="m144 128l-80 80V48Z" opacity=".2"></svg:path><svg:path d="M69.66 42.34A8 8 0 0 0 56 48v160a8 8 0 0 0 13.66 5.66l80-80a8 8 0 0 0 0-11.32ZM72 188.69V67.31L132.69 128ZM192 48v160a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhCaretLineRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
