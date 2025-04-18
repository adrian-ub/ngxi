import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCaretRightIcon],svg[la-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4.594v22.812l1.719-1.687l9-9l.687-.719l-.687-.719l-9-9zm2 4.843L20.563 16L14 22.563z"></svg:path>`,
})
export class LaCaretRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
