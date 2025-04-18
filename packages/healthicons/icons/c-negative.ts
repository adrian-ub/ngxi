import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsCNegativeIcon],svg[healthicons-c-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsCNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM25.95 14.192a10 10 0 0 1 5.121 2.737A2 2 0 1 0 33.9 14.1a14 14 0 1 0 0 19.799a2 2 0 0 0-2.829-2.829a10.001 10.001 0 1 1-5.12-16.879" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsCNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsCNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
