import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCprNegativeIcon],svg[healthicons-cpr-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCprNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM12 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8m5 18a4 4 0 1 0 0 8a4 4 0 0 0 0-8m-6 4c0-.901.199-1.756.555-2.523l-1.729.74A3.013 3.013 0 0 0 11.013 42h1.515A5.98 5.98 0 0 1 11 38m11.987 4h-1.515A5.98 5.98 0 0 0 23 38c0-.901-.199-1.756-.555-2.523l1.729.74A3.013 3.013 0 0 1 22.987 42M19 23v8a2 2 0 1 1-4 0V19.272c0-3.43 4.033-5.27 6.623-3.02l9.764 8.479a7.59 7.59 0 0 1 2.537 6.803L33 38h7a2 2 0 1 1 0 4H30a2 2 0 0 1-2-2v-7.204a4 4 0 0 0-1.343-2.99z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCprNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCprNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
