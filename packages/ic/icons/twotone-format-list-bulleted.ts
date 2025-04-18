import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icTwotoneFormatListBulletedIcon],svg[ic-twotone-format-list-bulleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5h14v2H7z"></svg:path><svg:circle cx="4" cy="6" r="1.5" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M7 11h14v2H7zm0 6h14v2H7zm-3 2.5c.82 0 1.5-.68 1.5-1.5s-.67-1.5-1.5-1.5s-1.5.68-1.5 1.5s.68 1.5 1.5 1.5"></svg:path><svg:circle cx="4" cy="12" r="1.5" fill="currentColor"></svg:circle>`,
})
export class IcTwotoneFormatListBulletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
