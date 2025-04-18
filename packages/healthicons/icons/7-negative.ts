import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons7NegativeIcon],svg[healthicons-7-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthicons7Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM16 10a2 2 0 1 0 0 4h11.922a73 73 0 0 0-4.599 7.369c-2.42 4.444-4.613 9.603-5.302 14.343a2 2 0 0 0 3.958.576c.59-4.06 2.531-8.734 4.858-13.006c2.316-4.254 4.918-7.933 6.678-9.977A2 2 0 0 0 32 10z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthicons7Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class Healthicons7NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
