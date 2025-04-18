import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineChickenLegIcon],svg[icon-park-outline-chicken-leg-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M33.375 33.874c4.243-4.242 1.414-18.384-4.95-24.748c-2.828-2.829-10.96-8.84-19.799 0c-8.839 8.838-2.828 16.97 0 19.799c6.364 6.364 20.506 9.192 24.749 4.95"></svg:path><svg:path stroke="currentColor" stroke-width="4" d="m41 41l-7-7"></svg:path><svg:circle cx="42.193" cy="40.071" r="2.5" fill="currentColor" transform="rotate(135 42.193 40.071)"></svg:circle><svg:circle cx="40.072" cy="42.192" r="2.5" fill="currentColor" transform="rotate(135 40.072 42.192)"></svg:circle><svg:circle cx="17" cy="18" r="2" fill="currentColor"></svg:circle><svg:circle cx="12" cy="21" r="2" fill="currentColor"></svg:circle><svg:circle cx="17" cy="24" r="2" fill="currentColor"></svg:circle></svg:g>`,
})
export class IconParkOutlineChickenLegIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
