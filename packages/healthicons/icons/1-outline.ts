import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons1OutlineIcon],svg[healthicons-1-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M24.879 9.879A3 3 0 0 1 30 12v24a3 3 0 0 1-6 0V19.236a3 3 0 0 1-4.121-4.357zm2.504 1.197a1 1 0 0 0-1.09.217l-5 5a1 1 0 0 0 1.414 1.414l1.586-1.586a1 1 0 0 1 1.707.707V36a1 1 0 1 0 2 0V12a1 1 0 0 0-.617-.924" clip-rule="evenodd"></svg:path>`,
})
export class Healthicons1OutlineIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
