import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNotification2FillIcon],svg[ri-notification-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20H2v-2h1v-6.969C3 6.043 7.03 2 12 2s9 4.043 9 9.031V18h1zM9.5 21h5a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class RiNotification2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
