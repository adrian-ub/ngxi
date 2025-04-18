import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsHamburgerIcon],svg[proicons-hamburger-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M12 3.724c-4.302 0-7.79 3.051-7.79 6.816h15.58c0-3.765-3.488-6.816-7.79-6.816"></svg:path><svg:rect width="18.5" height="5.355" x="2.75" y="10.54" rx="2"></svg:rect><svg:path d="M4.21 15.895h15.58l-.278 1.249a4 4 0 0 1-3.905 3.132H8.393a4 4 0 0 1-3.905-3.132zm10.926-2.833l-2.162-2.522h5.842l-2.162 2.522a1 1 0 0 1-1.518 0"></svg:path></svg:g>`,
})
export class ProiconsHamburgerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
