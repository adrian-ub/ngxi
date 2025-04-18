import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlertErrorFill12Icon],svg[garden-alert-error-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 1C2.46 1 0 3.46 0 6.5S2.46 12 5.5 12S11 9.54 11 6.5S8.54 1 5.5 1M5 3.5c0-.28.22-.5.5-.5s.5.22.5.5v3c0 .28-.22.5-.5.5S5 6.78 5 6.5zm.5 6.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class GardenAlertErrorFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
