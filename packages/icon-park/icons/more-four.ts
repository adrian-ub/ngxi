import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMoreFourIcon],svg[icon-park-more-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="10" height="10" x="17" y="11" transform="rotate(-45 17 11)"></svg:rect><svg:rect width="10" height="10" x="30" y="24" transform="rotate(-45 30 24)"></svg:rect><svg:rect width="10" height="10" x="4" y="24" transform="rotate(-45 4 24)"></svg:rect><svg:rect width="10" height="10" x="17" y="37" transform="rotate(-45 17 37)"></svg:rect></svg:g>`,
})
export class IconParkMoreFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
