import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretUpIcon],svg[zmdi-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213 245H0l107-106z"></svg:path>`,
})
export class ZmdiCaretUpIcon {
  readonly viewBox = input("0 0 216 384")
  readonly width = input("0.57em")
  readonly height = input("1em")
}
