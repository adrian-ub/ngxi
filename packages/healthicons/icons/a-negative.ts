import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsANegativeIcon],svg[healthicons-a-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g fill="currentColor" clip-path="url(#healthiconsANegative0)"><svg:path d="M24 17.2L28.5 28h-9z"></svg:path><svg:path fill-rule="evenodd" d="M48 0H0v48h48zM25.846 11.23a2 2 0 0 0-3.692 0L14.67 29.19l-.035.084l-2.482 5.957a2 2 0 1 0 3.692 1.538L17.833 32h12.334l1.987 4.77a2 2 0 0 0 3.692-1.54l-2.482-5.956l-.035-.085z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsANegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsANegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
