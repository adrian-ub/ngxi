import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertTriangleIcon],svg[healthicons-alert-triangle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M23.1 6.849a1 1 0 0 1 1.8 0l16.4 33.714A1 1 0 0 1 40.403 42H7.599a1 1 0 0 1-.9-1.437zM22 20a2 2 0 1 1 4 0v10a2 2 0 1 1-4 0zm1.967 14a1.966 1.966 0 0 0 0 3.933h.067a1.966 1.966 0 1 0 0-3.933z" clip-rule="evenodd"></svg:path>`,
})
export class HealthiconsAlertTriangleIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
