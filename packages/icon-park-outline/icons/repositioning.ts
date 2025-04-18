import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRepositioningIcon],svg[icon-park-outline-repositioning-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M33 22c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0"></svg:path><svg:path d="M24 25a3 3 0 1 0 0-6a3 3 0 0 0 0 6M9 14s7.5-11.5 20.5-7S42 24.5 42 24.5M42 8v16m-3 10s-6 11-19.5 7.5S6 24 6 24m0 0v16"></svg:path></svg:g>`,
})
export class IconParkOutlineRepositioningIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
