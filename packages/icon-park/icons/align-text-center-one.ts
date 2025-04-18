import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextCenterOneIcon],svg[icon-park-align-text-center-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M30 24H18"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 15H14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 33H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextCenterOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
