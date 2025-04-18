import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlertErrorStroke12Icon],svg[garden-alert-error-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="5.5" cy="6.5" r="5"></svg:circle><svg:path stroke-linecap="round" d="M5.5 3.5v3"></svg:path></svg:g><svg:circle cx="5.5" cy="9" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenAlertErrorStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
