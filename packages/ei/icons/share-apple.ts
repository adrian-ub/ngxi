import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiShareAppleIcon],svg[ei-share-apple-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.3 13.7L25 8.4l-5.3 5.3l-1.4-1.4L25 5.6l6.7 6.7z"></svg:path><svg:path fill="currentColor" d="M24 7h2v21h-2z"></svg:path><svg:path fill="currentColor" d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3"></svg:path>`,
})
export class EiShareAppleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
