import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallTransferFill16Icon],svg[garden-phone-call-transfer-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.293 10.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-1.232 1.232a3.5 3.5 0 0 1-4.95 0L1.061 8.475a3.5 3.5 0 0 1 0-4.95l1.232-1.232a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414L4.414 7L9 11.586zM12.85.149l2.65 2.65c.39.39.39 1.02 0 1.41l-2.65 2.65a.5.5 0 0 1-.85-.36V3.998H8a.5.5 0 0 1 0-1h4v-2.5c0-.45.54-.67.85-.35z"></svg:path>`,
})
export class GardenPhoneCallTransferFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
