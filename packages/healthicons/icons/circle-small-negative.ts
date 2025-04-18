import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCircleSmallNegativeIcon],svg[healthicons-circle-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCircleSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM36 24c0 6.627-5.373 12-12 12s-12-5.373-12-12c0-6.628 5.373-12 12-12s12 5.372 12 12" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCircleSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCircleSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
