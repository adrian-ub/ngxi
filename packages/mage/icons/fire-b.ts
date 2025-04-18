import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mageFireBIcon],svg[mage-fire-b-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M20.17 13.344c0-4.368-3.953-4.23-3.953-10.594C9.763 4.341 9.23 7.365 9.23 12.988c-1.463.149-2.797-2.273-3.637-3.597c-3.874 5.07-1.235 11.859 6.67 11.859a7.906 7.906 0 0 0 7.907-7.906"></svg:path><svg:path d="M16.938 12.988a5.11 5.11 0 0 1-5.93 4.942"></svg:path></svg:g>`,
})
export class MageFireBIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
