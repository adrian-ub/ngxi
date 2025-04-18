import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riNotification4FillIcon],svg[ri-notification-4-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m20 18.667l.4.533a.5.5 0 0 1-.4.8H4a.5.5 0 0 1-.4-.8l.4-.533V10a8 8 0 1 1 16 0zM9.5 21h5a2.5 2.5 0 0 1-5 0"></svg:path>`,
})
export class RiNotification4FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
