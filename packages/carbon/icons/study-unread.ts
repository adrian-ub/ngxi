import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonStudyUnreadIcon],svg[carbon-study-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M24 30a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6zm0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4z" fill="currentColor"></svg:path><svg:path d="M20 14v-2h-5v-2h3V8h-3V6h-2v2h-3v2h3v2H8v2h5v2H8v2h5v2h-3v2h7v-2h-2v-2h3v-2h-3v-2h5z" fill="currentColor"></svg:path><svg:path d="M15 24H4V4h20v11h2V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h11z" fill="currentColor"></svg:path>`,
})
export class CarbonStudyUnreadIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
