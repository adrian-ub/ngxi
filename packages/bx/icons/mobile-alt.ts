import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxMobileAltIcon],svg[bx-mobile-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16.75 2h-10c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h10c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2m-10 18V4h10l.002 16z"></svg:path><svg:circle cx="11.75" cy="18" r="1" fill="currentColor"></svg:circle>`,
})
export class BxMobileAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
