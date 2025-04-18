import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[miCaretRightIcon],svg[mi-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m10 7l6 5l-6 5z"></svg:path>`,
})
export class MiCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
