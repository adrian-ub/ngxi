import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[biChatSquareHeartFillIcon],svg[bi-chat-square-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6 3.993c1.664-1.711 5.825 1.283 0 5.132c-5.825-3.85-1.664-6.843 0-5.132"></svg:path>`,
})
export class BiChatSquareHeartFillIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
