import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSpineLabelIcon],svg[carbon-spine-label-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M3 11v2h5.59l-6.3 6.29l1.42 1.42l6.29-6.3V20h2v-9H3z" fill="currentColor"></svg:path><svg:path d="M26 13h-3v-1h-2v1h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v1h2v-1h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-8 4v-2h8v2z" fill="currentColor"></svg:path><svg:path d="M26 23h-3v-1h-2v1h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v1h2v-1h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2zm-8 4v-2h8v2z" fill="currentColor"></svg:path><svg:path d="M26 3h-3V2h-2v1h-3a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h3v1h2V9h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2zm-8 4V5h8v2z" fill="currentColor"></svg:path>`,
})
export class CarbonSpineLabelIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
