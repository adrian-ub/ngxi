import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCoinsNegativeIcon],svg[healthicons-coins-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCoinsNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm37.973 27.975A12.94 12.94 0 0 0 40 21c0-7.18-5.82-13-13-13c-2.567 0-4.96.744-6.975 2.027a17 17 0 0 0-3.954.698A14.96 14.96 0 0 1 27 6c8.284 0 15 6.716 15 15a14.96 14.96 0 0 1-4.725 10.929c.381-1.263.62-2.587.697-3.954M21 42c8.284 0 15-6.716 15-15s-6.716-15-15-15S6 18.716 6 27s6.716 15 15 15m-3-18a2 2 0 0 1 2-2v4a2 2 0 0 1-2-2m4-5v1a4 4 0 0 1 3.772 2.667a1 1 0 1 1-1.885.666A2 2 0 0 0 22 22v4a4 4 0 0 1 0 8v1h-2v-1a4 4 0 0 1-3.772-2.667a1 1 0 1 1 1.885-.666A2 2 0 0 0 20 32v-4a4 4 0 0 1 0-8v-1zm2 11a2 2 0 0 1-2 2v-4a2 2 0 0 1 2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCoinsNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCoinsNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
