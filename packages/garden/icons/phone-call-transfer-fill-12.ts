import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenPhoneCallTransferFill12Icon],svg[garden-phone-call-transfer-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 7.586l.293-.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-.232.232a3.5 3.5 0 0 1-4.95 0L1.061 6.475a3.5 3.5 0 0 1 0-4.95l.232-.232a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414L4.414 5zM9.85.15L11.5 1.8c.39.39.39 1.02 0 1.41L9.85 4.85A.47.47 0 0 1 9.5 5c-.06 0-.13-.01-.19-.04A.5.5 0 0 1 9 4.5V3H6.5a.5.5 0 1 1 0-1H9V.5c0-.2.12-.38.31-.46s.4-.04.54.11"></svg:path>`,
})
export class GardenPhoneCallTransferFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
