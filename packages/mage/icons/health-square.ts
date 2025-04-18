import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageHealthSquareIcon],svg[mage-health-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:rect width="18.5" height="18.5" x="2.75" y="2.75" rx="6"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M2.75 12.5H7l3-5l4 9l3-5h4.25"></svg:path></svg:g>`,
})
export class MageHealthSquareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
