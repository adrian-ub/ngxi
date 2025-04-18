import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFourKeyIcon],svg[icon-park-four-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" d="M26.9767 34V14L18 26.9967V29.0199H30"></svg:path></svg:g>`,
})
export class IconParkFourKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
