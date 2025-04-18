import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatCheckFillIcon],svg[ri-chat-check-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm4.838-6.879L8.818 9.646l-1.414 1.415l3.889 3.889l5.657-5.657l-1.414-1.414z"></svg:path>`,
})
export class RiChatCheckFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
