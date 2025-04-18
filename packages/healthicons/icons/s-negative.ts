import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSNegativeIcon],svg[healthicons-s-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM18 18a4 4 0 0 1 4-4h4a4 4 0 0 1 3.773 2.666a2 2 0 0 0 3.771-1.332A8 8 0 0 0 26 10h-4a8 8 0 1 0 0 16h4a4 4 0 0 1 0 8h-4a4 4 0 0 1-3.773-2.666a2 2 0 0 0-3.771 1.332A8 8 0 0 0 22 38h4a8 8 0 1 0 0-16h-4a4 4 0 0 1-4-4" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
