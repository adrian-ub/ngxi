import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCaretTopIcon],svg[ep-caret-top-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M512 320L192 704h639.936z"></svg:path>`,
})
export class EpCaretTopIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
