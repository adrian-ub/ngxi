import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarCart5BrokenIcon],svg[solar-cart-5-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M20.016 16.257c-.487 2.273-.73 3.409-1.555 4.076S16.474 21 14.15 21h-4.3c-2.324 0-3.486 0-4.31-.667c-.826-.667-1.07-1.803-1.556-4.076l-.429-2c-.718-3.353-1.078-5.03-.177-6.143C4.278 7 5.993 7 9.422 7h5.156c3.43 0 5.143 0 6.044 1.114c.67.83.643 1.972.288 3.886"></svg:path><svg:path stroke-linejoin="round" d="M16 12h-4m-3 0H8m2 3h4m4-6l-3-6M6 9l3-6"></svg:path></svg:g>`,
})
export class SolarCart5BrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
