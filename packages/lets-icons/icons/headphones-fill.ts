import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsHeadphonesFillIcon],svg[lets-icons-headphones-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="2"><svg:rect width="4" height="7" x="16" y="12" fill="currentColor" rx="2"></svg:rect><svg:rect width="4" height="7" x="4" y="12" fill="currentColor" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M4 13v3m16-3v3m0-3c0-2.387-.843-4.676-2.343-6.364S14.122 4 12 4s-4.157.948-5.657 2.636S4 10.613 4 13"></svg:path></svg:g>`,
})
export class LetsIconsHeadphonesFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
