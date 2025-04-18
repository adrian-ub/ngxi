import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreadmillTwoIcon],svg[icon-park-treadmill-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M8 39V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M40 39V44"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 31L42 15L38 9"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 14L43 4"></svg:path><svg:rect width="40" height="8" x="4" y="31" fill="#2F88FF" rx="4"></svg:rect></svg:g>`,
})
export class IconParkTreadmillTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
