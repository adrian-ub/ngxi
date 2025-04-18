import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTrunkIcon],svg[icon-park-trunk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="24" height="28" x="12" y="12" fill="#2F88FF" stroke="#000" rx="4"></svg:rect><svg:path stroke="#000" d="M20 12V6"></svg:path><svg:path stroke="#000" d="M28 12V6"></svg:path><svg:path stroke="#000" d="M16 4H32"></svg:path><svg:path stroke="#000" d="M18 40V44"></svg:path><svg:path stroke="#000" d="M30 40V44"></svg:path><svg:path stroke="#fff" d="M20 25H24H28"></svg:path></svg:g>`,
})
export class IconParkTrunkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
