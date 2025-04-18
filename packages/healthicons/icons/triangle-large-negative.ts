import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsTriangleLargeNegativeIcon],svg[healthicons-triangle-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsTriangleLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.767 6.474a.857.857 0 0 0-1.534 0L6.09 40.76A.857.857 0 0 0 6.857 42h34.286a.857.857 0 0 0 .767-1.24z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsTriangleLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsTriangleLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
