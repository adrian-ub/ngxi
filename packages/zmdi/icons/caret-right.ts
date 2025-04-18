import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretRightIcon],svg[zmdi-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 299V85l107 107z"></svg:path>`,
})
export class ZmdiCaretRightIcon {
  readonly viewBox = input("0 0 112 384")
  readonly width = input("0.3em")
  readonly height = input("1em")
}
