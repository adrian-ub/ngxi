import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[subwayReplyIcon],svg[subway-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M185.2 128.6V19.7L0 204.9l185.2 185.2v-109c152.5 0 250.5 0 326.8 217.9c0-108.9 10.9-370.4-326.8-370.4"></svg:path>`,
})
export class SubwayReplyIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
