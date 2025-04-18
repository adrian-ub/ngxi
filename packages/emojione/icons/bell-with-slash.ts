import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneBellWithSlashIcon],svg[emojione-bell-with-slash-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="32" cy="32" r="30" fill="#ff5a79"></svg:circle><svg:circle cx="32" cy="32" r="24" fill="#333"></svg:circle><svg:path fill="#fff" d="M42 32c-1.8-3.1-1.5-5.9-1.5-8c0-4.4-2.5-7.1-6.1-8.2c0-1.4-.8-2.6-2.4-2.6s-2.4 1.1-2.4 2.6c-3.6 1.1-6.1 3.8-6.1 8.2c0 2.1.3 4.9-1.5 8c-1.2 2.2-3.9 2.7-3.9 9.1H46c-.1-6.5-2.7-6.9-4-9.1m-9.2 10.9c0 2.4-2 4.4-4.4 4.4s-4.4-2-4.4-4.4z"></svg:path><svg:path fill="#ff5a79" d="m9.23 13.474l4.243-4.242l41.294 41.294l-4.242 4.243z"></svg:path>`,
})
export class EmojioneBellWithSlashIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
