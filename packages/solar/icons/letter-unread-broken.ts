import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarLetterUnreadBrokenIcon],svg[solar-letter-unread-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path stroke-linecap="round" d="M2 12c0 3.771 0 5.657 1.172 6.828S6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172S22 15.771 22 12c0-.946.018-1.273 0-2m-9-6h-3C6.229 4 4.343 4 3.172 5.172C2.518 5.825 2.229 6.7 2.102 8"></svg:path><svg:path stroke-linecap="round" d="m6 8l1.664 1.387m8.177.412c-1.836 1.53-2.755 2.296-3.841 2.296c-.65 0-1.239-.274-2-.82"></svg:path><svg:circle cx="19" cy="5" r="3"></svg:circle></svg:g>`,
})
export class SolarLetterUnreadBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
