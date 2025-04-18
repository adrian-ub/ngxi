import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsMinistryOfHealthNegativeIcon],svg[healthicons-ministry-of-health-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsMinistryOfHealthNegative0)"><svg:path d="M25 12v-2h-2v2h-2v2h2v2h2v-2h2v-2zm1 17a2 2 0 1 0-4 0v8h4z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM24.625 5.22a1 1 0 0 0-1.25 0L8.65 17H6v6h36v-6h-2.65zM20 29a4 4 0 0 1 8 0v8h6v-4h2v-8h4v8h2v4h2v6H4v-6h2v-4h2v-8h4v8h2v4h6z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsMinistryOfHealthNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsMinistryOfHealthNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
