import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSnowIcon],svg[icon-park-snow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9.45455 30.9942C6.14242 28.461 4 24.4278 4 19.8851C4 12.2166 10.1052 6 17.6364 6C23.9334 6 29.2336 10.3462 30.8015 16.2533C32.0353 15.6159 33.431 15.2567 34.9091 15.2567C39.9299 15.2567 44 19.4011 44 24.5135C44 28.3094 41.7562 31.5716 38.5455 33"></svg:path><svg:path d="M18 23V29"></svg:path><svg:path d="M15 26H21"></svg:path><svg:path d="M31 26V32"></svg:path><svg:path d="M28 29H34"></svg:path><svg:path d="M24 36V42"></svg:path><svg:path d="M21 39H27"></svg:path></svg:g>`,
})
export class IconParkSnowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
