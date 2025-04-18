import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlertErrorStroke16Icon],svg[garden-alert-error-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:circle cx="7.5" cy="8.5" r="7"></svg:circle><svg:path stroke-linecap="round" d="M7.5 4.5V9"></svg:path></svg:g><svg:circle cx="7.5" cy="12" r="1" fill="currentColor"></svg:circle>`,
})
export class GardenAlertErrorStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
