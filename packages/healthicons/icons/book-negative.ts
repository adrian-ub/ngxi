import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBookNegativeIcon],svg[healthicons-book-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsBookNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM14 5a5 5 0 0 0-5 5v32a1 1 0 0 0 1 1h28v-2H11v-1a3 3 0 0 1 3-3h24a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zm9 16v5h2v-5h5v-2h-5v-5h-2v5h-5v2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsBookNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsBookNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
