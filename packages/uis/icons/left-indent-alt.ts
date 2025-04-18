import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uisLeftIndentAltIcon],svg[uis-left-indent-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 17h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m0-4h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1m-8-6h8c.6 0 1-.4 1-1s-.4-1-1-1h-8c-.6 0-1 .4-1 1s.4 1 1 1m8 2h-8c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1M9 5c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1s1-.4 1-1V6c0-.6-.4-1-1-1m-4.4 7l1.1-.9c.4-.4.5-1 .1-1.4s-1-.5-1.4-.1l-2 1.7l-.1.1c-.4.4-.3 1.1.1 1.4l2 1.7c.2.1.4.2.6.2c.3 0 .6-.1.8-.4c.4-.4.3-1.1-.1-1.4z"></svg:path>`,
})
export class UisLeftIndentAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
