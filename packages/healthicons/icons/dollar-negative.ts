import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsDollarNegativeIcon],svg[healthicons-dollar-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsDollarNegative0)"><svg:path d="M18 18a4 4 0 0 1 4-4v8a4 4 0 0 1-4-4m12 12a4 4 0 0 1-4 4v-8a4 4 0 0 1 4 4"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24 6a2 2 0 0 1 2 2v2a8 8 0 0 1 7.544 5.334a2 2 0 0 1-3.771 1.332A4 4 0 0 0 26 14v8a8 8 0 1 1 0 16v2a2 2 0 1 1-4 0v-2a8 8 0 0 1-7.544-5.334a2 2 0 0 1 3.771-1.332A4 4 0 0 0 22 34v-8a8 8 0 1 1 0-16V8a2 2 0 0 1 2-2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsDollarNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsDollarNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
