import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatHeartLineIcon],svg[ri-chat-heart-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385L5.763 17H20V5H4zm8.018-3.685l-3.359-3.36a2.25 2.25 0 0 1 3.182-3.182l.177.177l.176-.177a2.25 2.25 0 0 1 3.182 3.182z"></svg:path>`,
})
export class RiChatHeartLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
