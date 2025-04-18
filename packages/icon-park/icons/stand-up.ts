import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkStandUpIcon],svg[icon-park-stand-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M17 22.458C12.9429 23.7323 10 27.5226 10 32.0002C10 37.5231 14.4772 42.0002 20 42.0002C23.2716 42.0002 26.1763 40.4291 28.0007 38.0002C28.2404 37.6811 28.4615 37.3471 28.6623 37"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 18L18.5 16H30L23 30H37V44"></svg:path><svg:circle cx="34" cy="8" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkStandUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
