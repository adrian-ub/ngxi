import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneRowingIcon],svg[icon-park-twotone-rowing-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTRowing0"><svg:g fill="none" stroke="#fff" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#555" d="M30.02 16a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m42 31l-7 13m-2.99-4L26 29L9 40l12-20l23 5M4 40h40"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTRowing0)"></svg:path>`,
})
export class IconParkTwotoneRowingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
