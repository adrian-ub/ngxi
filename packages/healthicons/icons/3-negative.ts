import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthicons3NegativeIcon],svg[healthicons-3-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthicons3Negative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM30 18c0-2.169-1.808-4-4.13-4h-4.088c-1.823 0-3.344 1.137-3.9 2.68a2 2 0 0 1-3.763-1.36c1.126-3.118 4.147-5.32 7.663-5.32h4.087C30.32 10 34 13.541 34 18a7.91 7.91 0 0 1-2.753 6A7.91 7.91 0 0 1 34 30c0 4.459-3.681 8-8.13 8h-4.088c-3.516 0-6.537-2.202-7.663-5.32a2 2 0 0 1 3.762-1.36c.557 1.543 2.078 2.68 3.901 2.68h4.087C28.192 34 30 32.169 30 30s-1.808-4-4.13-4h-4.088a2 2 0 1 1 0-4h4.087C28.192 22 30 20.169 30 18" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthicons3Negative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class Healthicons3NegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
