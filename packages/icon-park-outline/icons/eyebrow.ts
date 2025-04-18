import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineEyebrowIcon],svg[icon-park-outline-eyebrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 40c9.941 0 18-10 18-10s-8.059-10-18-10S6 30 6 30s8.059 10 18 10Z"></svg:path><svg:path d="M24 34a4 4 0 1 0 0-8a4 4 0 0 0 0 8Zm4-28c-7 0-18 3.5-21 6s-1 7 1 6s15.2-5.8 20-7s11.667.833 14 2c-2.333-2-7-7-14-7Z"></svg:path></svg:g>`,
})
export class IconParkOutlineEyebrowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
