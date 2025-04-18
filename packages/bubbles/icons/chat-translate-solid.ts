import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesChatTranslateSolidIcon],svg[bubbles-chat-translate-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6.5 4.25a.76.76 0 0 0-.75.75v.5a.25.25 0 0 0 .25.25h1a.25.25 0 0 0 .25-.25V5a.76.76 0 0 0-.75-.75m10.72 13a.23.23 0 0 0-.2.11a.24.24 0 0 0 0 .23q.12.32.3.61a.23.23 0 0 0 .21.13a.26.26 0 0 0 .22-.13q.17-.294.29-.61a.24.24 0 0 0 0-.23a.23.23 0 0 0-.2-.11z"></svg:path><svg:path d="M22.5 11h-7.75a.25.25 0 0 0-.25.25v2.5a.76.76 0 0 1-.75.75h-3a.25.25 0 0 0-.25.25v7.75A1.5 1.5 0 0 0 12 24h10.5a1.5 1.5 0 0 0 1.5-1.5v-10a1.5 1.5 0 0 0-1.5-1.5m-8 4.75h2a.25.25 0 0 0 .25-.25V15a.75.75 0 1 1 1.5 0v.5a.25.25 0 0 0 .25.25h2a.75.75 0 1 1 0 1.5h-.63a.26.26 0 0 0-.24.19a5.4 5.4 0 0 1-.88 1.91a.26.26 0 0 0 0 .19a.3.3 0 0 0 .12.17a6 6 0 0 0 1.37.57a.751.751 0 1 1-.4 1.44a7 7 0 0 1-2.16-1a.24.24 0 0 0-.28 0a6.9 6.9 0 0 1-2.16 1a.75.75 0 1 1-.4-1.44a6 6 0 0 0 1.37-.57a.3.3 0 0 0 .12-.17a.26.26 0 0 0 0-.19a5.4 5.4 0 0 1-.88-1.91a.26.26 0 0 0-.24-.19h-.71a.75.75 0 1 1 0-1.5"></svg:path><svg:path d="M12.75 13a.25.25 0 0 0 .25-.25V1.5A1.5 1.5 0 0 0 11.5 0h-10A1.5 1.5 0 0 0 0 1.5v10A1.5 1.5 0 0 0 1.5 13zM6 7.25a.25.25 0 0 0-.25.25v2a.75.75 0 1 1-1.5 0V5a2.25 2.25 0 1 1 4.5 0v4.5a.75.75 0 1 1-1.5 0v-2A.25.25 0 0 0 7 7.25z"></svg:path></svg:g>`,
})
export class BubblesChatTranslateSolidIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
