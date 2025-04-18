import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertIcon],svg[healthicons-alert-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21 7a3 3 0 1 1 6 0v24a3 3 0 1 1-6 0zm0 34a3 3 0 1 1 6 0a3 3 0 0 1-6 0"></svg:path>`,
})
export class HealthiconsAlertIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
