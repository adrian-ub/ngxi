import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsNoNegativeIcon],svg[healthicons-no-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsNoNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m-7.778-13.636a1 1 0 0 0 1.414 1.414L24 25.414l6.364 6.364a1 1 0 0 0 1.414-1.414L25.414 24l6.364-6.364a1 1 0 0 0-1.414-1.414L24 22.586l-6.364-6.364a1 1 0 0 0-1.414 1.414L22.586 24z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsNoNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsNoNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
