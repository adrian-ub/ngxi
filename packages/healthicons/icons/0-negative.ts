import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons0NegativeIcon],svg[healthicons-0-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthicons0Negative0)"><svg:path d="M18 18a4 4 0 0 1 4-4h4a4 4 0 0 1 1.25.198L18 29.382zm2.146 15.546l9.815-16.11Q30 17.713 30 18v12a4 4 0 0 1-4 4h-4c-.67 0-1.3-.163-1.854-.454"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM22 10a8 8 0 0 0-8 8v12c0 2.048.772 3.92 2.038 5.334A8 8 0 0 0 22 38h4a8 8 0 0 0 8-8V18c0-2.37-1.033-4.5-2.666-5.962A7.98 7.98 0 0 0 26 10z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthicons0Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class Healthicons0NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
