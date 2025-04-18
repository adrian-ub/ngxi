import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fxemojiAlienIcon],svg[fxemoji-alien-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#597B91" d="M67.9 30.9v-1.2C67.2 13.2 53.6 0 37 0C20.3 0 6.7 13.2 6.1 29.7v2.9C7.1 55.3 28.1 72 37 72c8.8 0 29.8-16.7 30.9-39.4c-.1-.5 0-1.1 0-1.7"></svg:path><svg:path fill="#2B3B47" d="M26.3 33.4c-1.3-3.5-5-5.6-8.7-4.6s-5.9 4.6-5.3 8.4h-.1l2.7 9.9c1 3.9 5.1 6.2 9 5.2s6.2-5.1 5.2-9zm35.3 3.7c.7-3.7-1.6-7.4-5.3-8.4s-7.5 1.1-8.7 4.6h-.1l-2.7 9.9c-1 3.9 1.3 7.9 5.2 9c3.9 1 7.9-1.3 9-5.2zM37 64.5c-3.2 0-6-1.6-7.6-4.3q-.3-.6 0-1.2c.2-.4.6-.6 1.1-.6h13.2c.4 0 .8.2 1.1.6q.3.6 0 1.2c-1.8 2.7-4.7 4.3-7.8 4.3"></svg:path>`,
})
export class FxemojiAlienIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
