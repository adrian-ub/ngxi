import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBeautyIcon],svg[icon-park-solid-beauty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 44V22c0-9.941-8.059-18-18-18S6 12.059 6 22v22"></svg:path><svg:path fill="currentColor" d="M24 43c5.523 0 10-8.954 10-20H14c0 11.046 4.477 20 10 20"></svg:path></svg:g>`,
})
export class IconParkSolidBeautyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
