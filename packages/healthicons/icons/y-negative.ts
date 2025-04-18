import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsYNegativeIcon],svg[healthicons-y-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsYNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM35.536 13.28a2 2 0 1 0-3.072-2.56L24 20.876L15.537 10.72a2 2 0 1 0-3.073 2.56L22 24.724V36a2 2 0 0 0 4 0V24.724z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsYNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsYNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
