import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciCaretLeftIcon],svg[ci-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m9.5 12l5 5V7l-5 5Z"></svg:path>`,
})
export class CiCaretLeftIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
