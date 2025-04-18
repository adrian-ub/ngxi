import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsAlertTriangleNegativeIcon],svg[healthicons-alert-triangle-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsAlertTriangleNegative0)"><svg:path d="M24 18a2 2 0 0 0-2 2v10a2 2 0 1 0 4 0V20a2 2 0 0 0-2-2m-2 17.966C22 34.88 22.88 34 23.967 34h.067a1.966 1.966 0 1 1 0 3.933h-.067A1.966 1.966 0 0 1 22 35.966"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24.9 6.849a1 1 0 0 0-1.8 0L6.7 40.563A1 1 0 0 0 7.598 42h32.803a1 1 0 0 0 .899-1.437z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsAlertTriangleNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsAlertTriangleNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
