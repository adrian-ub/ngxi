import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChafingDishIcon],svg[icon-park-chafing-dish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 42C14.0589 42 6 33.9411 6 24C6 14.0589 14.0589 6 24 6"></svg:path><svg:path fill="#2F88FF" d="M24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C24 6 20 8 20 15C20 22 28 26 28 33C28 40 24 42 24 42Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M42 20H44V28H42"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M6 20H4V28H6"></svg:path></svg:g>`,
})
export class IconParkChafingDishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
