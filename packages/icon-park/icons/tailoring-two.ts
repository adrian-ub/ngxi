import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTailoringTwoIcon],svg[icon-park-tailoring-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#000" d="M42 5H37.4142C36.5233 5 36.0771 6.07714 36.7071 6.70711L41.2929 11.2929C41.9229 11.9229 43 11.4767 43 10.5858V6C43 5.44772 42.5523 5 42 5Z"></svg:path><svg:path fill="#000" d="M8 43H12.5858C13.4767 43 13.9229 41.9229 13.2929 41.2929L8.70711 36.7071C8.07714 36.0771 7 36.5233 7 37.4142L7 42C7 42.5523 7.44772 43 8 43Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M14 4V32C14 33.1046 14.8954 34 16 34H44"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M21 13H35V27"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M14 13H6"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M36 42V34"></svg:path></svg:g>`,
})
export class IconParkTailoringTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
