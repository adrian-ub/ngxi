import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLockOneIcon],svg[icon-park-lock-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="30" r="14" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#000" stroke-linejoin="round" d="M31 18V11C31 7.13401 27.866 4 24 4V4C20.134 4 17 7.13401 17 11V18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M24 26L24 34"></svg:path></svg:g>`,
})
export class IconParkLockOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
