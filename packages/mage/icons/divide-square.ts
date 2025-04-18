import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageDivideSquareIcon],svg[mage-divide-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor"><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16.882 12H7.118"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11.995 15.792h.01m-.01-7.583h.01"></svg:path><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" stroke-width="1.5" rx="6"></svg:rect></svg:g>`,
})
export class MageDivideSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
