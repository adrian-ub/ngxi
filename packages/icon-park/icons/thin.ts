import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkThinIcon],svg[icon-park-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" d="M33 25H15C13.41 25 11.23 24.77 10 24C6.35 21.69 5.66004 16.63 8.00004 13L14.0001 4C17.9301 12.43 30.04 12.42 34 4L40 13C42.34 16.63 41.64 21.69 38 24C36.77 24.78 34.59 25 33 25Z"></svg:path><svg:path d="M12 25L14.52 34.55C15.39 37.93 14.46 41.52 12 44"></svg:path><svg:path d="M36.0004 25L33.4804 34.58C32.6104 37.96 33.5404 41.52 36.0004 44"></svg:path><svg:path d="M24 42V40"></svg:path></svg:g>`,
})
export class IconParkThinIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
