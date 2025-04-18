import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSayanaPressNegativeIcon],svg[healthicons-sayana-press-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSayanaPressNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M0 0h48v48H0zm23 6l2-2v7h-2zm-1 13h1v-8h-2a1 1 0 0 0-1 1v5h-1v2h-3a4 4 0 0 0-4 4v17a4 4 0 0 0 4 4h16a4 4 0 0 0 4-4V23a4 4 0 0 0-4-4h-3v-2h-1v-5a1 1 0 0 0-1-1h-2v8h1v1a1 1 0 0 1-1 1v3h-2v-3a1 1 0 0 1-1-1zm2 17a5 5 0 1 0 0-10a5 5 0 0 0 0 10m-1 2v2h2v-2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSayanaPressNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSayanaPressNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
