import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCaretLeftIcon],svg[ep-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M672 192L288 511.936L672 832z"></svg:path>`,
})
export class EpCaretLeftIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
