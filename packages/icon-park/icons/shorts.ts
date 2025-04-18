import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkShortsIcon],svg[icon-park-shorts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 6H11V16L4 33L19 42L24 36L29 42L44 33L37 16V6Z"></svg:path><svg:path fill="#fff" d="M11 14C9.89543 14 9 14.8954 9 16C9 17.1046 9.89543 18 11 18V14ZM37 18C38.1046 18 39 17.1046 39 16C39 14.8954 38.1046 14 37 14V18ZM11 18L37 18V14L11 14V18Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M37 14V16L38.75 20.25"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M11 14V16L9.25 20.25"></svg:path></svg:g>`,
})
export class IconParkShortsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
