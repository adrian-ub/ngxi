import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneFlagForBotswanaIcon],svg[emojione-flag-for-botswana-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#b4d7ee" d="M60.9 24C57.4 11.3 45.8 2 32 2S6.6 11.3 3.1 24v16C6.6 52.7 18.2 62 32 62s25.4-9.3 28.9-22z"></svg:path><svg:path fill="#fff" d="M61.6 27c-.2-1-.4-2-.7-3H3.1c-.3 1-.5 2-.7 3zM2.4 37c.2 1 .4 2 .7 3h57.8c.3-1 .5-2 .7-3z"></svg:path><svg:path fill="#3e4347" d="M2 32c0 1.7.1 3.4.4 5h59.2c.3-1.6.4-3.3.4-5s-.1-3.4-.4-5H2.4c-.3 1.6-.4 3.3-.4 5"></svg:path>`,
})
export class EmojioneFlagForBotswanaIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
