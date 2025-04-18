import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageSearchSquareIcon],svg[mage-search-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10.82 15.857a5.038 5.038 0 1 0 0-10.076a5.038 5.038 0 0 0 0 10.076m3.575-1.462l3.197 3.197"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageSearchSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
