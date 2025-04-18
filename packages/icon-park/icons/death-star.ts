import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDeathStarIcon],svg[icon-park-death-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M5 25H44"></svg:path><svg:circle cx="19" cy="15" r="4" fill="#43CCF8" stroke="#fff"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" d="M31 31H43"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 17L42 17"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M25 37H39"></svg:path><svg:path stroke="#000" d="M40 11.998C42.5116 15.341 44 19.4967 44 24C44 31.8085 39.5252 38.5718 33 41.8654"></svg:path><svg:path stroke="#000" d="M4.40007 20C4.13772 21.2924 4 22.6301 4 24C4 25.7265 4.21876 27.4019 4.63009 29"></svg:path></svg:g>`,
})
export class IconParkDeathStarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
