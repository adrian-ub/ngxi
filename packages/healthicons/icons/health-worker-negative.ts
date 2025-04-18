import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHealthWorkerNegativeIcon],svg[healthicons-health-worker-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHealthWorkerNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm17 28.013c.503-.115 2 1.987 2 1.987h10s1.497-2.102 2-1.987c5.404 1.23 11 4.782 11 8.557V42H6v-5.43c0-3.775 5.596-7.327 11-8.557M32 34v-2h2v2h2v2h-2v2h-2v-2h-2v-2zm0-18a8 8 0 1 1-16 0a8 8 0 0 1 16 0m2 0c0 5.523-4.477 10-10 10s-10-4.477-10-10S18.477 6 24 6s10 4.477 10 10" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHealthWorkerNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHealthWorkerNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
