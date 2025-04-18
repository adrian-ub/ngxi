import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMouseZodiacIcon],svg[icon-park-outline-mouse-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M19 35H4c0-8 5-18 10-18l2 9m12 9c0-5 2-8.01 9-8"></svg:path><svg:path d="M44 28.537C45 33.511 42 35 40 34s-1.5-6-3-10c-3.14-8.375-15-10-22-3"></svg:path></svg:g>`,
})
export class IconParkOutlineMouseZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
