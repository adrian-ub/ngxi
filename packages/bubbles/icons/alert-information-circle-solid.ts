import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bubblesAlertInformationCircleSolidIcon],svg[bubbles-alert-information-circle-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 0a8 8 0 1 0 8 8a8.01 8.01 0 0 0-8-8m.857 12a.857.857 0 0 1-1.714 0V8a.857.857 0 0 1 1.714 0zM8 5.714A1.143 1.143 0 1 1 8 3.43a1.143 1.143 0 0 1 0 2.285"></svg:path>`,
})
export class BubblesAlertInformationCircleSolidIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
