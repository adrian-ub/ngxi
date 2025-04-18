import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFNKeyIcon],svg[icon-park-f-n-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M26 17V32"></svg:path><svg:path stroke="#fff" d="M26 23C26 20.6214 27.6 19 30 19C32.4 19 34 20.5273 34 23C34 24.6484 34 28.707 34 32"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" stroke-linejoin="round" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFNKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
