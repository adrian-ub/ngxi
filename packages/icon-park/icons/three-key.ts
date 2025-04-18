import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkThreeKeyIcon],svg[icon-park-three-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M19 14H29L22 23C26 23 29 25 29 29C29 33 26 34 24 34C21.619 34 20 33 19 31.9"></svg:path></svg:g>`,
})
export class IconParkThreeKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
