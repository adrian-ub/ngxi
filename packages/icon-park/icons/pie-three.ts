import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPieThreeIcon],svg[icon-park-pie-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="24" r="20"></svg:circle><svg:path fill="#2F88FF" d="M24 4C27.9021 4 31.719 5.14149 34.9805 7.28385C38.2419 9.42621 40.8054 12.4758 42.3551 16.057C43.9048 19.6382 44.3731 23.5946 43.7022 27.4386C43.0313 31.2826 41.2506 34.8464 38.5794 37.6909L24 24V4Z"></svg:path></svg:g>`,
})
export class IconParkPieThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
