import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlertErrorFill16Icon],svg[garden-alert-error-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.5 1C3.36 1 0 4.36 0 8.5S3.36 16 7.5 16S15 12.64 15 8.5S11.64 1 7.5 1M7 4.5c0-.28.22-.5.5-.5s.5.22.5.5V9c0 .28-.22.5-.5.5S7 9.28 7 9zm.5 8.5c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class GardenAlertErrorFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
