import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarMediumNegativeIcon],svg[healthicons-star-medium-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarMediumNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.892 11.06a.99.99 0 0 0-1.784 0l-3.556 7.278a1 1 0 0 1-.749.55l-7.95 1.167c-.816.12-1.142 1.133-.551 1.714l5.752 5.665c.235.231.342.564.286.89l-1.358 7.999c-.139.82.714 1.447 1.444 1.06l7.11-3.777a.99.99 0 0 1 .927 0l7.11 3.776c.73.388 1.584-.238 1.445-1.06l-1.358-7.998a1.01 1.01 0 0 1 .286-.89l5.752-5.665c.591-.581.265-1.594-.551-1.714l-7.95-1.167a1 1 0 0 1-.75-.55z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarMediumNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarMediumNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
