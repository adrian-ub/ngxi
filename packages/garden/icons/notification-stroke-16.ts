import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenNotificationStroke16Icon],svg[garden-notification-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linejoin="round" d="M13.5 9.5s0-9-5.5-9s-5.5 9-5.5 9C.65 9.5.44 11.15.46 12c.01.28.22.5.5.5h14.08c.28 0 .49-.22.5-.5c.02-.85-.19-2.5-2.04-2.5zm-7 3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5"></svg:path>`,
})
export class GardenNotificationStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
