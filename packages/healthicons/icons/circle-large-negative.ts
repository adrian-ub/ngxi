import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCircleLargeNegativeIcon],svg[healthicons-circle-large-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCircleLargeNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0v48h48V0zm24 4a20 20 0 1 1 0 40a20 20 0 0 1 0-40" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCircleLargeNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCircleLargeNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
