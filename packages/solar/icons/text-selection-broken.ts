import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTextSelectionBrokenIcon],svg[solar-text-selection-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M9 9h6m-3 6V9"></svg:path><svg:path d="M6 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0ZM22 4a2 2 0 1 1-4 0a2 2 0 0 1 4 0Zm0 16a2 2 0 1 1-4 0a2 2 0 0 1 4 0Z"></svg:path><svg:path stroke-linecap="round" d="M18 4H6m14 14v-6m0-6v2m-2 12h-6m-6 0h2M4 6v12"></svg:path></svg:g>`,
})
export class SolarTextSelectionBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
