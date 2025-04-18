import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsSocialDistancingNegativeIcon],svg[healthicons-social-distancing-negative-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#healthiconsSocialDistancingNegative0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M48 0H0v48h48zM11.537 11.707L10.244 13h27.512l-1.293-1.293a1 1 0 0 1 1.414-1.414l2.121 2.121a2 2 0 0 1 0 2.829l-2.12 2.121a1 1 0 0 1-1.415-1.414l.95-.95H10.587l.95.95a1 1 0 0 1-1.414 1.414l-2.121-2.121a2 2 0 0 1 0-2.829l2.12-2.121a1 1 0 0 1 1.415 1.414M11.5 29c1.934 0 3.5-1.566 3.5-3.5S13.434 22 11.5 22A3.5 3.5 0 0 0 8 25.5c0 1.934 1.566 3.5 3.5 3.5m0 1C8.997 30 4 31.43 4 34.267V38h15v-3.733C19 31.429 14.003 30 11.5 30m25-1c1.934 0 3.5-1.566 3.5-3.5S38.434 22 36.5 22a3.5 3.5 0 0 0-3.5 3.5c0 1.934 1.566 3.5 3.5 3.5m0 1c-2.503 0-7.5 1.43-7.5 4.267V38h15v-3.733C44 31.429 39.003 30 36.5 30" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="healthiconsSocialDistancingNegative0"><svg:path d="M0 0h48v48H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class HealthiconsSocialDistancingNegativeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
