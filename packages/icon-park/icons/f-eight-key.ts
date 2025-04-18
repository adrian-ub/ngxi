import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFEightKeyIcon],svg[icon-park-f-eight-key-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" rx="3"></svg:rect><svg:path stroke="#fff" d="M30 24C32.2091 24 34 22.2091 34 20C34 17.7909 32.2091 16 30 16C27.7909 16 26 17.7909 26 20C26 22.2091 27.7909 24 30 24Z"></svg:path><svg:path stroke="#fff" d="M30 33C32.2091 33 34 31.2091 34 29C34 26.7909 32.2091 25 30 25C27.7909 25 26 26.7909 26 29C26 31.2091 27.7909 33 30 33Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M21 16H14V32"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 24H21"></svg:path></svg:g>`,
})
export class IconParkFEightKeyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
