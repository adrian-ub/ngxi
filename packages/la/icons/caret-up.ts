import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCaretUpIcon],svg[la-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m16 8.594l-.719.687l-10 10L3.594 21h24.812l-1.687-1.719l-10-10zm0 2.844L23.563 19H8.438z"></svg:path>`,
})
export class LaCaretUpIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
