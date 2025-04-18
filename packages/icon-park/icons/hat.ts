import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHatIcon],svg[icon-park-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M9 16C9 11.5817 12.5817 8 17 8H31C35.4183 8 39 11.5817 39 16V32H9V16Z"></svg:path><svg:rect width="40" height="8" x="4" y="32" fill="#2F88FF" rx="2"></svg:rect><svg:path d="M9 22L17 22"></svg:path><svg:path d="M31 22L39 22"></svg:path></svg:g>`,
})
export class IconParkHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
