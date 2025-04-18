import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpIcon],svg[ph-caret-double-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 194.34a8 8 0 0 1-11.32 11.32L128 131.31l-74.34 74.35a8 8 0 0 1-11.32-11.32l80-80a8 8 0 0 1 11.32 0Zm-160-68.68L128 51.31l74.34 74.35a8 8 0 0 0 11.32-11.32l-80-80a8 8 0 0 0-11.32 0l-80 80a8 8 0 0 0 11.32 11.32"></svg:path>`,
})
export class PhCaretDoubleUpIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
