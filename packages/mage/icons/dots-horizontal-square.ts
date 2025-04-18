import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDotsHorizontalSquareIcon],svg[mage-dots-horizontal-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M16.151 12a.656.656 0 1 0 1.311 0a.656.656 0 0 0-1.31 0m-4.808 0a.656.656 0 1 0 1.311 0a.656.656 0 0 0-1.31 0m-4.807 0a.656.656 0 1 0 1.31 0a.656.656 0 0 0-1.31 0"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect></svg:g>`,
})
export class MageDotsHorizontalSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
