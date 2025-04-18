import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSquareHint32RegularIcon],svg[fluent-square-hint-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 3a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zm0 24a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2zM4 19a1 1 0 0 1-1-1v-4a1 1 0 1 1 2 0v4a1 1 0 0 1-1 1m23-1a1 1 0 1 0 2 0v-4a1 1 0 1 0-2 0zM9 4a1 1 0 0 0-1-1h-.25A4.75 4.75 0 0 0 3 7.75V8a1 1 0 0 0 2 0v-.25A2.75 2.75 0 0 1 7.75 5H8a1 1 0 0 0 1-1M8 29a1 1 0 1 0 0-2h-.25A2.75 2.75 0 0 1 5 24.25V24a1 1 0 1 0-2 0v.25A4.75 4.75 0 0 0 7.75 29zM23 4a1 1 0 0 1 1-1h.25A4.75 4.75 0 0 1 29 7.75V8a1 1 0 1 1-2 0v-.25A2.75 2.75 0 0 0 24.25 5H24a1 1 0 0 1-1-1m1 25a1 1 0 1 1 0-2h.25A2.75 2.75 0 0 0 27 24.25V24a1 1 0 1 1 2 0v.25A4.75 4.75 0 0 1 24.25 29z"></svg:path>`,
})
export class FluentSquareHint32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
