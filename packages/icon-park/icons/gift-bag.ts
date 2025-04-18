import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGiftBagIcon],svg[icon-park-gift-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:rect width="36" height="28" x="6" y="14" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="#2F88FF" stroke-linejoin="round" d="M6 32H42V39C42 40.6569 40.6569 42 39 42H9C7.34315 42 6 40.6569 6 39V32Z"></svg:path><svg:circle cx="19" cy="9" r="5" fill="#2F88FF"></svg:circle><svg:circle cx="28" cy="10" r="4" fill="#2F88FF"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M17 20L24 14L31 20"></svg:path></svg:g>`,
})
export class IconParkGiftBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
