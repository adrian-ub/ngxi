import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsNotificationOff03Icon],svg[hugeicons-notification-off-03-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.5 17.829c-4.181 1.08-9.26.856-13.068-.675c-1.164-.468-2.115-1.407-1.902-2.76c.13-.832.777-1.524 1.256-2.2c.627-.897.689-1.874.69-2.915c0-1.338.373-2.701 1.024-3.779m2-2A7.6 7.6 0 0 1 12.051 2c4.134 0 7.484 3.26 7.484 7.28c0 1.04.063 2.018.686 2.914c.477.676 1.12 1.368 1.25 2.2c.137.884-.218 1.591-.804 2.106M22 22L2 2m7 19c.796.622 1.848 1 3 1s2.204-.378 3-1" color="currentColor"></svg:path>`,
})
export class HugeiconsNotificationOff03Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
