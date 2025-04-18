import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageBagBIcon],svg[mage-bag-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.45 9.23h11.1a1.85 1.85 0 0 1 1.85 1.85v6.472a3.7 3.7 0 0 1-3.7 3.698H8.3a3.7 3.7 0 0 1-3.7-3.698V11.08a1.85 1.85 0 0 1 1.85-1.85"></svg:path><svg:path d="M7.375 9.23V7.381A4.62 4.62 0 0 1 12 2.75a4.627 4.627 0 0 1 4.625 4.631v1.85"></svg:path></svg:g>`,
})
export class MageBagBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
