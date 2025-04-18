import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsXNegativeIcon],svg[healthicons-x-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsXNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35.536 13.28a2 2 0 1 0-3.072-2.56L24 20.876L15.537 10.72a2 2 0 1 0-3.073 2.56L21.397 24l-8.933 10.72a2 2 0 1 0 3.073 2.56L24 27.124l8.464 10.156a2 2 0 1 0 3.072-2.56L26.603 24z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsXNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsXNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
