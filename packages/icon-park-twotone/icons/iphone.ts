import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneIphoneIcon],svg[icon-park-twotone-iphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTIphone0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="26" height="40" x="11" y="4" fill="#555" rx="3"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M22 10h4m-6 28h8"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTIphone0)"></svg:path>`,
})
export class IconParkTwotoneIphoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
