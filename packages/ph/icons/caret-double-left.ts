import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftIcon],svg[ph-caret-double-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M205.66 202.34a8 8 0 0 1-11.32 11.32l-80-80a8 8 0 0 1 0-11.32l80-80a8 8 0 0 1 11.32 11.32L131.31 128ZM51.31 128l74.35-74.34a8 8 0 0 0-11.32-11.32l-80 80a8 8 0 0 0 0 11.32l80 80a8 8 0 0 0 11.32-11.32Z"></svg:path>`,
})
export class PhCaretDoubleLeftIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
