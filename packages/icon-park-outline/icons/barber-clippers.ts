import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBarberClippersIcon],svg[icon-park-outline-barber-clippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 8h28v9l-5 7v12s0 8-9 8s-9-8-9-8V24l-5-7zm5-4v6m6-6v6m6-6v6"></svg:path><svg:rect width="6" height="10" x="21" y="28" rx="3"></svg:rect><svg:path d="M10 17h28M33 4v6"></svg:path></svg:g>`,
})
export class IconParkOutlineBarberClippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
