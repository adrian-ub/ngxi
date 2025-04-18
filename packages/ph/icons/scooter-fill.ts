import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phScooterFillIcon],svg[ph-scooter-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 172a32 32 0 1 1-49.38-26.85l-9-26.89l-51.46 62.81A8 8 0 0 1 128 184H73.66a32 32 0 1 1 2.08-16h48.47l55.46-67.69L162.23 48H136a8 8 0 0 1 0-16h32a8 8 0 0 1 7.59 5.47l34.21 102.61c.72-.05 1.46-.08 2.2-.08a32 32 0 0 1 32 32"></svg:path>`,
})
export class PhScooterFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
