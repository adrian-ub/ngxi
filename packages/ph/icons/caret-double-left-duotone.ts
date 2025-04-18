import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftDuotoneIcon],svg[ph-caret-double-left-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M200 48v160l-80-80Z" opacity=".2"></svg:path><svg:path d="M203.06 40.61a8 8 0 0 0-8.72 1.73l-80 80a8 8 0 0 0 0 11.32l80 80A8 8 0 0 0 208 208V48a8 8 0 0 0-4.94-7.39M192 188.69L131.31 128L192 67.31Zm-66.34 13.65a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L51.31 128Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleLeftDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
