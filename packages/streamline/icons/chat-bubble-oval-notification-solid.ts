import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleOvalNotificationSolidIcon],svg[streamline-chat-bubble-oval-notification-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M6.998.046c.523 0 1.044.059 1.55.175a3.723 3.723 0 0 0 5.232 5.23l.004.014a6.954 6.954 0 0 1-9.685 7.854l-3.466.627a.5.5 0 0 1-.556-.668l.994-2.646A6.954 6.954 0 0 1 6.998.046m6.952 2.486a2.482 2.482 0 1 1-4.964 0a2.482 2.482 0 0 1 4.964 0" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleOvalNotificationSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
