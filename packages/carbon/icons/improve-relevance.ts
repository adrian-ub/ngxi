import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonImproveRelevanceIcon],svg[carbon-improve-relevance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 26.59L19.41 24L18 25.41l4 4l8-8L28.59 20z"></svg:path><svg:circle cx="16" cy="16" r="2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 22a6 6 0 1 1 6-6a6.007 6.007 0 0 1-6 6m0-10a4 4 0 1 0 4 4a4.005 4.005 0 0 0-4-4"></svg:path><svg:path fill="currentColor" d="M28 16a12 12 0 1 0-12 12v-2a10 10 0 1 1 10-10Z"></svg:path>`,
})
export class CarbonImproveRelevanceIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
