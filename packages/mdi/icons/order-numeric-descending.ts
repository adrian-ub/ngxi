import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiOrderNumericDescendingIcon],svg[mdi-order-numeric-descending-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 11H3V9h4V8H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2m0-6H5v1h2m-2 7h2a2 2 0 0 1 2 2v4c0 1.11-.89 2-2 2H5a2 2 0 0 1-2-2v-4c0-1.1.9-2 2-2m0 6h2v-4H5m7-10h10v2H12m0 12v-2h10v2m-10-8h10v2H12Z"></svg:path>`,
})
export class MdiOrderNumericDescendingIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
