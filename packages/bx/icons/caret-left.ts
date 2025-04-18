import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxCaretLeftIcon],svg[bx-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 19V5l-8 7z"></svg:path>`,
})
export class BxCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
