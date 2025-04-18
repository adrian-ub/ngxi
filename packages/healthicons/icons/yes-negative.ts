import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsYesNegativeIcon],svg[healthicons-yes-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsYesNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zm-4 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4s20 8.954 20 20m-9.33-7.741a1 1 0 0 1 .072 1.412l-12.667 14l-.69.761l-.742-.709l-7.334-7a1 1 0 0 1 1.382-1.446l6.59 6.29L33.259 16.33a1 1 0 0 1 1.412-.07" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsYesNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsYesNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
