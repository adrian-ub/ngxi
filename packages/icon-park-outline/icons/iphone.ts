import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineIphoneIcon],svg[icon-park-outline-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="26" height="40" x="11" y="4" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 10h4m-6 28h8"></svg:path></svg:g>`,
})
export class IconParkOutlineIphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
