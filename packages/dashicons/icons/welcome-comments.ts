import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[dashiconsWelcomeCommentsIcon],svg[dashicons-welcome-comments-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 2h10c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-2l-5 5v-5H5c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2m8.5 8.5L11 8l2.5-2.5l-1-1L10 7L7.5 4.5l-1 1L9 8l-2.5 2.5l1 1L10 9l2.5 2.5z"></svg:path>`,
})
export class DashiconsWelcomeCommentsIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
