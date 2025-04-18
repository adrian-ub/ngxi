import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laCaretLeftIcon],svg[la-caret-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 4.594L18.281 6.28l-9 9l-.687.719l.687.719l9 9L20 27.406zm-2 4.843v13.126L11.437 16z"></svg:path>`,
})
export class LaCaretLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
