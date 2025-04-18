import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddTwoIcon],svg[icon-park-add-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path d="M33 7.26261C30.3212 5.81915 27.2563 5 24 5C13.5066 5 5 13.5066 5 24C5 34.4934 13.5066 43 24 43C26.858 43 29.5685 42.369 32 41.2387"></svg:path><svg:path stroke-linejoin="round" d="M31 30L43 30"></svg:path><svg:path stroke-linejoin="round" d="M15 22L22 29L41 11"></svg:path><svg:path stroke-linejoin="round" d="M37 24V36"></svg:path></svg:g>`,
})
export class IconParkAddTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
