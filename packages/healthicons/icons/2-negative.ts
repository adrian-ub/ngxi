import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons2NegativeIcon],svg[healthicons-2-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthicons2Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30 18a4 4 0 0 0-4-4h-4a4 4 0 0 0-3.773 2.666a2 2 0 0 1-3.771-1.332A8 8 0 0 1 22 10h4a8 8 0 0 1 5.364 13.935L20.948 34H32a2 2 0 1 1 0 4H16a2 2 0 0 1-1.39-3.438l14-13.528l.056-.052A4 4 0 0 0 30 18" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthicons2Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class Healthicons2NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
