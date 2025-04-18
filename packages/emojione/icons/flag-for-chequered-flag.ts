import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForChequeredFlagIcon],svg[emojione-flag-for-chequered-flag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#333" d="M18.7 13c-3.7.5-7.1 1.8-10 4.6l-3-8.1c2.9-2.8 6.3-4.1 10-4.6z"></svg:path><svg:path fill="#fff" d="M30.3 12.9c-4-.2-8-.4-11.7.1l-3-8.1c3.7-.5 7.7-.3 11.7-.1z"></svg:path><svg:path fill="#333" d="M42 12.8c-3.7.5-7.7.3-11.7.1l-3-8.1c4 .2 8 .4 11.7-.1q1.5 3.9 3 8.1"></svg:path><svg:path fill="#fff" d="M52 8.1c-2.9 2.8-6.3 4.1-10 4.6l-3-8.1c3.7-.5 7.1-1.8 10-4.6zm-30.3 13c-3.7.5-7.1 1.8-10 4.6l-3-8.1c2.9-2.8 6.3-4.1 10-4.6z"></svg:path><svg:path fill="#333" d="M33.3 21c-4-.2-8-.4-11.7.1l-3-8.1c3.7-.5 7.7-.3 11.7-.1z"></svg:path><svg:path fill="#fff" d="M45 20.9c-3.7.5-7.7.3-11.7.1l-3-8.1c4 .2 8 .4 11.7-.1z"></svg:path><svg:path fill="#333" d="M55 16.3c-2.9 2.8-6.3 4.1-10 4.6l-3-8.1c3.7-.5 7.1-1.8 10-4.6q1.5 3.9 3 8.1m-30.3 13c-3.7.5-7.1 1.8-10 4.6l-3-8.1c2.9-2.8 6.3-4.1 10-4.6z"></svg:path><svg:path fill="#fff" d="M36.4 29.1c-4-.2-8-.4-11.7.1l-3-8.1c3.7-.5 7.7-.3 11.7-.1c.9 2.7 2 5.4 3 8.1"></svg:path><svg:path fill="#333" d="M48 29c-3.7.5-7.7.3-11.6.1l-3-8.1c4 .2 8 .4 11.7-.1c.9 2.7 1.9 5.4 2.9 8.1"></svg:path><svg:path fill="#fff" d="M58 24.4c-2.9 2.8-6.3 4.1-10 4.6l-3-8.1c3.7-.5 7.1-1.8 10-4.6zm-30.3 13c-3.7.5-7.1 1.8-10 4.6l-3-8.1c2.9-2.8 6.3-4.1 10-4.6z"></svg:path><svg:path fill="#333" d="M39.4 37.3c-4-.2-8-.4-11.7.1l-3-8.1c3.7-.5 7.7-.3 11.7-.1z"></svg:path><svg:path fill="#fff" d="M51 37.1c-3.7.5-7.7.3-11.7.1l-3-8.1c4 .2 8 .4 11.6-.1c1.1 2.7 2.1 5.4 3.1 8.1"></svg:path><svg:path fill="#333" d="M61 32.5c-2.9 2.8-6.3 4.1-10 4.6L48 29c3.7-.5 7.1-1.8 10-4.6zM25.9 64H24L3 7.3l1.7-.6z"></svg:path>`,
})
export class EmojioneFlagForChequeredFlagIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
