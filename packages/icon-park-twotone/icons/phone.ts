import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotonePhoneIcon],svg[icon-park-twotone-phone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTPhone0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:path fill="#555" stroke-linejoin="round" d="M8 30h32v12a2 2 0 0 1-2 2H10a2 2 0 0 1-2-2z"></svg:path><svg:path stroke-linejoin="round" d="M40 30V6a2 2 0 0 0-2-2H10a2 2 0 0 0-2 2v24"></svg:path><svg:path stroke-linecap="round" d="M22 37h4"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTPhone0)"></svg:path>`,
})
export class IconParkTwotonePhoneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
