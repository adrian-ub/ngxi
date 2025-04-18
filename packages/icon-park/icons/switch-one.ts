import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSwitchOneIcon],svg[icon-park-switch-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="19" fill="#2F88FF" stroke="#000"></svg:circle><svg:rect width="10.519" height="24.012" x="36.006" y="19.334" fill="#43CCF8" stroke="#fff" rx="5.259" transform="rotate(90 36.006 19.334)"></svg:rect><svg:rect width="10" height="10" x="36.006" y="29.852" stroke="#fff" rx="5" transform="rotate(-180 36.006 29.852)"></svg:rect></svg:g>`,
})
export class IconParkSwitchOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
