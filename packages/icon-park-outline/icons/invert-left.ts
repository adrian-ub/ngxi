import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineInvertLeftIcon],svg[icon-park-outline-invert-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 15c0 7.299 4.103 13.583 10 16.408A16.15 16.15 0 0 0 27 33c9.389 0 17-8.059 17-18"></svg:path><svg:path d="m18 20l-8-5l-6 8"></svg:path></svg:g>`,
})
export class IconParkOutlineInvertLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
