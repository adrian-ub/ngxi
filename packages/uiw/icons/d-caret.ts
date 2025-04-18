import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uiwDCaretIcon],svg[uiw-d-caret-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.407 11.333c.618 0 .773.64.37 1.054l-5.23 5.39a.786.786 0 0 1-1.096 0l-5.229-5.39c-.402-.414-.246-1.054.37-1.054Zm-4.86-9.11l5.23 5.39c.403.414.248 1.054-.37 1.054H4.592c-.616 0-.772-.64-.37-1.054l5.229-5.39a.786.786 0 0 1 1.097 0"></svg:path>`,
})
export class UiwDCaretIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
