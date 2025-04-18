import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBloodPressureNegativeIcon],svg[healthicons-blood-pressure-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBloodPressureNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm15.563 7C10.035 7 6 12.64 6 18.724C6 32.304 24 41 24 41s2.123-1.092 4.912-3.053A10.5 10.5 0 0 1 23 28.5C23 22.701 27.701 18 33.5 18a10.48 10.48 0 0 1 8.15 3.88c.227-1.025.35-2.077.35-3.156C42 12.642 37.965 7 32.438 7C28.602 7 25.755 9.531 24 13.121C22.243 9.531 19.398 7 15.563 7M40 28.5a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0m2 0a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-6 .5a2 2 0 1 1-3.97-.348l-2.42-2.42l1.415-1.414l2.299 2.3Q33.643 27 34 27a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBloodPressureNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBloodPressureNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
