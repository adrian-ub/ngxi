import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallOutFill12Icon],svg[garden-phone-call-out-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 7.586l.293-.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-.232.232a3.5 3.5 0 0 1-4.95 0L1.061 6.475a3.5 3.5 0 0 1 0-4.95l.232-.232a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414L4.414 5zm3.5-.591a.47.47 0 0 1-.35-.15l-5-4.996a.47.47 0 0 1-.11-.54A.5.5 0 0 1 5.5 1H10c.55 0 1 .45 1 1v4.495c0 .2-.12.38-.31.46c-.06.03-.13.04-.19.04"></svg:path>`,
})
export class GardenPhoneCallOutFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
