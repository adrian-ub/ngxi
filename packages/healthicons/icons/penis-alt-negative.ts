import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPenisAltNegativeIcon],svg[healthicons-penis-alt-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" fill-rule="evenodd" clip-path="url(#healthiconsPenisAltNegative0)" clip-rule="evenodd"><svg:path d="M48 0H0v48h48zM8.999 6S5.901 22.06 6.002 25.07C6.147 29.338 10 42 10 42h28s3.853-12.661 3.998-16.93C42.099 22.06 39 6 39 6z"></svg:path><svg:path d="M23 23v10a1 1 0 1 0 2 0V23h2v10a3 3 0 1 1-6 0V23zm-3 2v1a1 1 0 0 0 1 1v2a3 3 0 0 1-3-3v-1zm8 1v-1h2v1a3 3 0 0 1-3 3v-2a1 1 0 0 0 1-1"></svg:path><svg:path d="M23 42v-7h2v7z"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPenisAltNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPenisAltNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
