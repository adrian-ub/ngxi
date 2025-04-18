import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisLeftIndentIcon],svg[uis-left-indent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 7h18c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m0 4h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18 6H3c-.6 0-1 .4-1 1s.4 1 1 1h18c.6 0 1-.4 1-1s-.4-1-1-1M3 15h10c.6 0 1-.4 1-1s-.4-1-1-1H3c-.6 0-1 .4-1 1s.4 1 1 1m18.8-5.3c-.4-.4-1-.5-1.4-.1l-2 1.7l-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2c.3 0 .6-.1.8-.4c.4-.4.3-1.1-.1-1.4l-1.1-.9l1.1-.9c.4-.4.4-1 .1-1.4"></svg:path>`,
})
export class UisLeftIndentIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
