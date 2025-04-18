import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsHeartNegativeIcon],svg[healthicons-heart-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsHeartNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM15.563 7C10.035 7 6 12.64 6 18.724C6 32.304 24 41 24 41s18-9.256 18-22.276C42 12.642 37.965 7 32.438 7C28.602 7 25.755 9.531 24 13.121C22.243 9.531 19.398 7 15.563 7" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsHeartNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsHeartNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
