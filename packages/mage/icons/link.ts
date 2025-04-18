import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageLinkIcon],svg[mage-link-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M10.522 13.48a4.1 4.1 0 0 0 2.892 1.199a4.7 4.7 0 0 0 1.063-.136a4.2 4.2 0 0 0 1.828-1.063l.969-.968l2.878-2.888a4.085 4.085 0 0 0-2.922-6.873a4.1 4.1 0 0 0-2.862 1.096L11.49 6.736"></svg:path><svg:path d="m12.445 17.336l-2.892 2.888a4.094 4.094 0 0 1-6.801-2.944a4.1 4.1 0 0 1 1.031-2.833l2.892-2.888l.969-.968A4.2 4.2 0 0 1 9.47 9.53a4.1 4.1 0 0 1 3.956 1.062"></svg:path></svg:g>`,
})
export class MageLinkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
