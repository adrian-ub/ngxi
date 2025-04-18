import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBarberClippersIcon],svg[icon-park-barber-clippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 8L38 8V17L33 24V36C33 36 33 44 24 44C15 44 15 36 15 36L15 24L10 17V8Z"></svg:path><svg:path d="M15 4V10"></svg:path><svg:path d="M21 4V10"></svg:path><svg:path d="M27 4V10"></svg:path><svg:rect width="6" height="10" x="21" y="28" fill="#2F88FF" rx="3"></svg:rect><svg:path d="M10 17H38"></svg:path><svg:path d="M33 4V10"></svg:path></svg:g>`,
})
export class IconParkBarberClippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
