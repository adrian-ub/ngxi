import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFiveKeyIcon],svg[icon-park-five-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M29 14.0093H20V21.0341C20 21 22 20 25 20C28 20 29 22.0339 29 26C29 29.9661 28 33 24 33C21 33 20 31 20 29.0078"></svg:path></svg:g>`,
})
export class IconParkFiveKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
