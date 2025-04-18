import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftDuotoneIcon],svg[ph-caret-line-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M192 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M195.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 200 208V48a8 8 0 0 0-4.94-7.39M184 188.69L123.31 128L184 67.31ZM80 48v160a8 8 0 0 1-16 0V48a8 8 0 0 1 16 0"></svg:path></svg:g>`,
})
export class PhCaretLineLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
