import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpDuotoneIcon],svg[ph-caret-double-up-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M208 200H48l80-80Z" opacity=".2"></svg:path><svg:path d="M133.66 114.34a8 8 0 0 0-11.32 0l-80 80A8 8 0 0 0 48 208h160a8 8 0 0 0 5.66-13.66ZM67.31 192L128 131.31L188.69 192Zm-25-66.34a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 0l80 80a8 8 0 0 1-11.32 11.32L128 51.31l-74.34 74.35a8 8 0 0 1-11.32 0Z"></svg:path></svg:g>`,
})
export class PhCaretDoubleUpDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
