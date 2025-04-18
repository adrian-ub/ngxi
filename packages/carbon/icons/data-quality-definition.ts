import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDataQualityDefinitionIcon],svg[carbon-data-quality-definition-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m24.6 24.4l2.6 2.6l-2.6 2.6L26 31l4-4l-4-4zm-2.2 0L19.8 27l2.6 2.6L21 31l-4-4l4-4z"></svg:path><svg:circle cx="11" cy="8" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="16" r="1" fill="currentColor"></svg:circle><svg:circle cx="11" cy="24" r="1" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M24 3H8c-1.1 0-2 .9-2 2v22c0 1.1.9 2 2 2h7v-2H8v-6h18V5c0-1.1-.9-2-2-2m0 16H8v-6h16zm0-8H8V5h16z"></svg:path>`,
})
export class CarbonDataQualityDefinitionIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
