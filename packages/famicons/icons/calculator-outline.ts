import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsCalculatorOutlineIcon],svg[famicons-calculator-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="288" height="416" x="112" y="48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" rx="32" ry="32"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M160.01 112H352v64H160.01z"></svg:path><svg:circle cx="168" cy="248" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="248" r="24" fill="currentColor"></svg:circle><svg:circle cx="344" cy="248" r="24" fill="currentColor"></svg:circle><svg:circle cx="168" cy="328" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="328" r="24" fill="currentColor"></svg:circle><svg:circle cx="168" cy="408" r="24" fill="currentColor"></svg:circle><svg:circle cx="256" cy="408" r="24" fill="currentColor"></svg:circle><svg:rect width="48" height="128" x="320" y="304" fill="currentColor" rx="24" ry="24"></svg:rect>`,
})
export class FamiconsCalculatorOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
