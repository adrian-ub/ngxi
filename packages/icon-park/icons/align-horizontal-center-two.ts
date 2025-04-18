import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignHorizontalCenterTwoIcon],svg[icon-park-align-horizontal-center-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="6" height="24" x="7" y="12"></svg:rect><svg:rect width="6" height="32" x="21" y="8"></svg:rect><svg:rect width="6" height="18" x="35" y="15"></svg:rect></svg:g>`,
})
export class IconParkAlignHorizontalCenterTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
