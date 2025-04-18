import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSeatIcon],svg[icon-park-seat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" d="M17 21.458C12.9429 22.7323 10 26.5226 10 31.0002C10 36.5231 14.4772 41.0002 20 41.0002C23.2716 41.0002 26.1763 39.4291 28.0007 37.0002C28.2404 36.6811 28.4615 36.3471 28.6623 36"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 20C34 20 30.5 19.5 24 17V29H38V43"></svg:path><svg:circle cx="24" cy="8" r="4" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSeatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
