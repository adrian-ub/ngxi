import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMirrorTwoIcon],svg[icon-park-mirror-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="24" cy="17" r="13" fill="#2F88FF"></svg:circle><svg:path d="M42 17C42 26.9411 33.9411 35 24 35C14.0589 35 6 26.9411 6 17"></svg:path><svg:path d="M42 17H38"></svg:path><svg:path d="M10 17H6"></svg:path><svg:path d="M30 44H18"></svg:path><svg:path d="M24 44V36"></svg:path></svg:g>`,
})
export class IconParkMirrorTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
