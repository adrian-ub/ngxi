import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiCaretLeftIcon],svg[zmdi-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M107 85v214L0 192z"></svg:path>`,
})
export class ZmdiCaretLeftIcon {
  readonly viewBox = input("0 0 112 384")
  readonly width = input("0.3em")
  readonly height = input("1em")
}
