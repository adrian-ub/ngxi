import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidGiftBagIcon],svg[icon-park-solid-gift-bag-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="36" height="28" x="6" y="14" stroke-linejoin="round" rx="3"></svg:rect><svg:path fill="currentColor" stroke-linejoin="round" d="M6 32h36v7a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3z"></svg:path><svg:circle cx="19" cy="9" r="5" fill="currentColor"></svg:circle><svg:circle cx="28" cy="10" r="4" fill="currentColor"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="m17 20l7-6l7 6"></svg:path></svg:g>`,
})
export class IconParkSolidGiftBagIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
