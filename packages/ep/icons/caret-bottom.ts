import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[epCaretBottomIcon],svg[ep-caret-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m192 384l320 384l320-384z"></svg:path>`,
})
export class EpCaretBottomIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
