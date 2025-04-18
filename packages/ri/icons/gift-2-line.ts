import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riGift2LineIcon],svg[ri-gift-2-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.505 2.003a3.5 3.5 0 0 1 3.163 5h3.337a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-1v8a1 1 0 0 1-1 1h-14a1 1 0 0 1-1-1v-8h-1a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h3.337a3.5 3.5 0 0 1 5.664-3.95a3.48 3.48 0 0 1 2.499-1.05m3.5 11h-12v7h12zm2-4h-16v2h16zm-10.5-5a1.5 1.5 0 0 0-.145 2.993l.145.007h1.5v-1.5A1.5 1.5 0 0 0 9.649 4.01zm5 0l-.145.007a1.5 1.5 0 0 0-1.348 1.348l-.007.145v1.5h1.5l.144-.007a1.5 1.5 0 0 0 0-2.986z"></svg:path>`,
})
export class RiGift2LineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
