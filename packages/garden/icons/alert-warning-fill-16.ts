import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenAlertWarningFill16Icon],svg[garden-alert-warning-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.57 13.54L8.39 1.63c-.34-.67-1.43-.67-1.78 0L.43 13.54c-.16.31-.15.68.03.98s.51.48.86.48h12.36c.35 0 .67-.18.85-.48s.2-.67.04-.98M7 6c0-.28.22-.5.5-.5s.5.22.5.5v3.5c0 .28-.22.5-.5.5S7 9.78 7 9.5zm.5 7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1"></svg:path>`,
})
export class GardenAlertWarningFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
