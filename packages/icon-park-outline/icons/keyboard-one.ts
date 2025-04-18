import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineKeyboardOneIcon],svg[icon-park-outline-keyboard-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="40" height="24" x="4" y="18" stroke="currentColor" stroke-linejoin="round" stroke-width="4" rx="2"></svg:rect><svg:circle cx="14" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="16" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="10" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="20" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="22" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="26" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="28" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="32" cy="24" r="2" fill="currentColor"></svg:circle><svg:circle cx="34" cy="30" r="2" fill="currentColor"></svg:circle><svg:circle cx="38" cy="24" r="2" fill="currentColor"></svg:circle><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M17 36h14m2-18v-4.875a1 1 0 0 1 1-1h5a1 1 0 0 0 1-1V6"></svg:path></svg:g>`,
})
export class IconParkOutlineKeyboardOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
