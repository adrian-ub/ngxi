import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCaretLeftIcon],svg[oi-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 0L2 4l4 4z"></svg:path>`,
})
export class OiCaretLeftIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
