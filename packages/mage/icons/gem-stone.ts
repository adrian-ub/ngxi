import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageGemStoneIcon],svg[mage-gem-stone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M21.238 9.153a1.1 1.1 0 0 1-.231.54l-8.14 10.476c-.151.19-.36.326-.596.386a1 1 0 0 1-.473 0a1.1 1.1 0 0 1-.672-.397L2.986 9.693a1.1 1.1 0 0 1-.067-1.267l2.886-4.494l.088-.11a1.1 1.1 0 0 1 .838-.397h10.53a1 1 0 0 1 .254 0a1.1 1.1 0 0 1 .672.474l2.886 4.494a1.1 1.1 0 0 1 .165.76"></svg:path><svg:path d="m14.2 3.458l1.574 5.695l-3.503 11.39m-.473.012L7.777 9.153l2.016-5.695M2.754 9.153h18.484"></svg:path></svg:g>`,
})
export class MageGemStoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
