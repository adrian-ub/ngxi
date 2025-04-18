import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonHl7AttributesIcon],svg[carbon-hl7-attributes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="M29 9h-8v4h2v-2h3.847L22 23h2.157L29 11V9z" fill="currentColor"></svg:path><svg:path d="M14 21V9h-2v14h8v-2h-6z" fill="currentColor"></svg:path><svg:path d="M8 9v6H4V9H2v14h2v-6h4v6h2V9H8z" fill="currentColor"></svg:path>`,
})
export class CarbonHl7AttributesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
