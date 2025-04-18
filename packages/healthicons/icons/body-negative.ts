import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBodyNegativeIcon],svg[healthicons-body-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBodyNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10m13.52 3.931a2 2 0 1 0-1.04-3.862c-4.978 1.339-8.751 1.946-12.472 1.93c-3.727-.015-7.509-.655-12.512-1.937a2 2 0 0 0-.992 3.876c2.73.699 5.175 1.23 7.496 1.58V42a2 2 0 0 0 3.992.181l1-11A2 2 0 0 0 23 31h2a2 2 0 0 0 .008.181l1 11A2 2 0 0 0 30 42V19.554c2.325-.344 4.779-.885 7.52-1.623" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBodyNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBodyNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
