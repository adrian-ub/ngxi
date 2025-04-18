import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForBlackFlagIcon],svg[emojione-flag-for-black-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3e4347" d="M48.2.7c-16.6-5.2-22.4 19.4-39 14.2c3 8.3 6 16.5 9 24.8c16.6 5.2 22.4-19.4 39-14.2c-3-8.3-6-16.5-9-24.8"></svg:path><svg:path fill="#94989b" d="m7.7 15.4l-.9.4L24.4 64h1zM27 64L9.1 14.9l-.8.3L26 64z"></svg:path><svg:path fill="#d0d0d0" d="m7.7 15.4l.6-.2zM26 64L8.3 15.2l-.6.2L25.4 64z"></svg:path>`,
})
export class EmojioneFlagForBlackFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
