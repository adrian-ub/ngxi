import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageArrowUpSquareIcon],svg[mage-arrow-up-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M12 6.81V17.6"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17.14 11.537l-4.41-4.419a1.03 1.03 0 0 0-1.46 0l-4.409 4.42"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageArrowUpSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
