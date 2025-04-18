import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiEmailMarkAsUnreadIcon],svg[mdi-email-mark-as-unread-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.84 7h-2.62L10.5 4L4 7.41V17a2 2 0 0 1-2-2V7.17c0-.67.28-1.11.81-1.36L10.5 2l7.55 3.81c.45.28.73.69.79 1.19M7 8h13a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2m13 3.67V10l-6.5 3.31L7 10v1.67L13.5 15z"></svg:path>`,
})
export class MdiEmailMarkAsUnreadIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
