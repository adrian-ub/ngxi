import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPersonNegativeIcon],svg[healthicons-person-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPersonNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm24 26c5.523 0 10-4.477 10-10S29.523 6 24 6s-10 4.477-10 10s4.477 10 10 10m0 2c-6.007 0-18 3.035-18 8v6h36v-6c0-4.965-11.992-8-18-8" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPersonNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPersonNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
