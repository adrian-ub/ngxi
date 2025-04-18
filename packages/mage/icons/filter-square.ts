import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFilterSquareIcon],svg[mage-filter-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17.75 8.805h-1.437m-3.594 0H6.25m11.5 6.39h-6.469m-3.593 0H6.25m3.234 1.797a1.797 1.797 0 1 0 0-3.594a1.797 1.797 0 0 0 0 3.594m5.032-6.39a1.797 1.797 0 1 0 0-3.594a1.797 1.797 0 0 0 0 3.594"></svg:path></svg:g>`,
})
export class MageFilterSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
