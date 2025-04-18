import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBarberClippersIcon],svg[icon-park-twotone-barber-clippers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBarberClippers0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 8h28v9l-5 7v12s0 8-9 8s-9-8-9-8V24l-5-7zm5-4v6m6-6v6m6-6v6"></svg:path><svg:rect width="6" height="10" x="21" y="28" fill="#555" rx="3"></svg:rect><svg:path d="M10 17h28M33 4v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBarberClippers0)"></svg:path>`,
})
export class IconParkTwotoneBarberClippersIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
