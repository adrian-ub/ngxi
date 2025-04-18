import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPersonMail32FilledIcon],svg[fluent-person-mail-32-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m-8.5 2A3.5 3.5 0 0 0 2 21.5v.5c0 2.393 1.523 4.417 3.685 5.793c2.167 1.38 5.097 2.201 8.283 2.207a4.5 4.5 0 0 1-.468-2v-8c0-.718.168-1.398.468-2zM18 17a3 3 0 0 0-3 3v.198l8 4.444l8-4.444V20a3 3 0 0 0-3-3zm13 4.913l-7.636 4.243a.75.75 0 0 1-.728 0L15 21.914V28a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3z"></svg:path>`,
})
export class FluentPersonMail32FilledIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
