import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCaretRightIcon],svg[ep-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 192v640l384-320.064z"></svg:path>`,
})
export class EpCaretRightIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
