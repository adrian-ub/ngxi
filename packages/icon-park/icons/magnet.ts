import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMagnetIcon],svg[icon-park-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10V26C6 35.9411 14.0589 44 24 44C33.9411 44 42 35.9411 42 26V10M14 10V26C14 31.5228 18.4772 36 24 36C29.5228 36 34 31.5228 34 26V10"></svg:path><svg:path fill="#2F88FF" d="M14 4H6V10H14V4Z"></svg:path><svg:path fill="#2F88FF" d="M34 4H42V10H34V4Z"></svg:path></svg:g>`,
})
export class IconParkMagnetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
