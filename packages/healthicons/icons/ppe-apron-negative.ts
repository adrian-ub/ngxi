import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsPpeApronNegativeIcon],svg[healthicons-ppe-apron-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsPpeApronNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM19.428 7.027A6 6 0 0 0 14 13v12a2 2 0 0 0 2 2h2v12l2.838.946a10 10 0 0 0 6.324 0L30 39V27h2a2 2 0 0 0 2-2V13a6 6 0 0 0-5.428-5.973a5.001 5.001 0 0 1-9.144 0M19 25v-2h10v2z" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsPpeApronNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsPpeApronNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
