import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsGNegativeIcon],svg[healthicons-g-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsGNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30.667 16.546a2 2 0 1 0 2.666-2.981a14 14 0 1 0 0 20.87a2 2 0 0 0 .667-1.49V24a2 2 0 0 0-2-2h-8a2 2 0 1 0 0 4h6v6a10 10 0 1 1 .667-15.454" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsGNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsGNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
