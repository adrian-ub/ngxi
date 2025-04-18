import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallOutFill16Icon],svg[garden-phone-call-out-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.293 10.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-1.232 1.232a3.5 3.5 0 0 1-4.95 0L1.061 8.475a3.5 3.5 0 0 1 0-4.95l1.232-1.232a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414L4.414 7L9 11.586zM13.5 9a.47.47 0 0 1-.35-.15l-6-6a.47.47 0 0 1-.11-.54c.08-.19.26-.31.46-.31H13c.55 0 1 .45 1 1v5.5c0 .2-.12.38-.31.46c-.06.03-.13.04-.19.04"></svg:path>`,
})
export class GardenPhoneCallOutFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
