import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsStarSmallNegativeIcon],svg[healthicons-star-small-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsStarSmallNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM24.917 14.568a1.025 1.025 0 0 0-1.834 0L20.63 19.52c-.15.3-.437.51-.77.558l-5.484.793a1.018 1.018 0 0 0-.567 1.739l3.968 3.854c.24.234.35.571.294.902l-.937 5.441c-.143.833.734 1.468 1.484 1.075l4.905-2.57c.298-.156.654-.156.952 0l4.905 2.57c.75.393 1.627-.242 1.484-1.075l-.937-5.441c-.057-.33.053-.668.294-.902l3.968-3.854a1.018 1.018 0 0 0-.567-1.739l-5.483-.794a1.02 1.02 0 0 1-.77-.557z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsStarSmallNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsStarSmallNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
