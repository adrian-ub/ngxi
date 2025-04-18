import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPearlOfTheOrientIcon],svg[icon-park-pearl-of-the-orient-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:circle cx="24" cy="33" r="6" fill="#2F88FF"></svg:circle><svg:circle cx="24" cy="13" r="3" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" d="M24 40V44"></svg:path><svg:path stroke-linecap="round" d="M22 16L20 28"></svg:path><svg:path stroke-linecap="round" d="M26 16L28 28"></svg:path><svg:path stroke-linecap="round" d="M19 37L16 44"></svg:path><svg:path stroke-linecap="round" d="M29 37L32 44"></svg:path><svg:path stroke-linecap="round" d="M24 4V10"></svg:path></svg:g>`,
})
export class IconParkPearlOfTheOrientIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
