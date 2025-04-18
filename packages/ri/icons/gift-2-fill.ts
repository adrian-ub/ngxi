import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGift2FillIcon],svg[ri-gift-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.005 13.003v7a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-7zm-5.5-11a3.5 3.5 0 0 1 3.163 5h3.337a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-18a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h3.337a3.5 3.5 0 0 1 5.664-3.95a3.48 3.48 0 0 1 2.499-1.05m-5 2a1.5 1.5 0 0 0-.145 2.993l.145.007h1.5v-1.5A1.5 1.5 0 0 0 9.649 4.01zm5 0l-.145.007a1.5 1.5 0 0 0-1.348 1.348l-.007.145v1.5h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986z"></svg:path>`,
})
export class RiGift2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
