import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[weuiVolumeDownFilledIcon],svg[weui-volume-down-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M11.3 4.7c.4-.4 1-.4 1.4 0c.2.2.3.4.3.7v13.2c0 .6-.4 1-1 1c-.3 0-.5-.1-.7-.3l-3.8-3.8H3c-.6 0-1-.4-1-1v-5c0-.6.4-1 1-1h4.5zm4.9 11.2l-1.1-1.1l.1-.1c.7-.7 1.1-1.7 1.1-2.7s-.4-2-1.1-2.7l-.1-.1l1.1-1.1l.1.1c1 1 1.6 2.4 1.6 3.8s-.6 2.8-1.6 3.8z"></svg:path>`,
})
export class WeuiVolumeDownFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
