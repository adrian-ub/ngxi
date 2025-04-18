import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidanceShopIcon],svg[guidance-shop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M5.5 21a2 2 0 1 0 4 0m3 0a2 2 0 1 0 4 0M7 7.5h15.5v.25l-.239.283A16 16 0 0 0 18.5 18.34v.16h-13v-1.88c0-2.08-.066-4.158-.386-6.212C4.56 6.852 3.337 1.5 1 1.5"></svg:path>`,
})
export class GuidanceShopIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
