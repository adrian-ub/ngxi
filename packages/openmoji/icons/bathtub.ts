import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiBathtubIcon],svg[openmoji-bathtub-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#9B9B9A" d="M22.76 54.46h-5.442l-2.557 7.328c-.336.964.38 1.97 1.4 1.97h3.354zm24.364 0h5.441l2.557 7.328c.336.964-.38 1.97-1.4 1.97h-3.354z"></svg:path><svg:path fill="#9B9B9A" d="m16.534 59.598l-1.143 3.53h3.524l.667-2.054m33.857-1.476l1.143 3.53h-3.524l-.667-2.054"></svg:path><svg:path fill="#D0CFCE" d="M11.007 34.218v9.428c0 6.915 5.4 12.572 12 12.572h26c6.6 0 12-5.657 12-12.572v-9.428s-23 2.095-50 0"></svg:path><svg:path fill="#9B9B9A" d="m43.804 56.218l16.76-21.71l-.056 12.766s-1.968 5.624-6.804 8.098c0 0-5.345 1.408-9.9.846"></svg:path><svg:path fill="#D0CFCE" d="M46.166 14.305c1.61-2.102 4.297-2.748 6.002-1.443s1.781 4.068.172 6.17z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"><svg:path d="M11.007 34.218v9.428c0 6.915 5.4 12.572 12 12.572h26c6.6 0 12-5.657 12-12.572v-9.428s-23 2.095-50 0m47.661 0V14.362s0-6.946-6.5-1.5"></svg:path><svg:path d="M46.166 14.305c1.61-2.102 4.297-2.748 6.002-1.443s1.781 4.068.172 6.17zm7.273 45.293l1.143 3.53h-3.524l-.667-2.054m-33.857-1.476l-1.143 3.53h3.524l.667-2.054m-8.575-26.856v9.428c0 6.915 5.4 12.572 12 12.572h26c6.6 0 12-5.657 12-12.572v-9.428s-23 2.095-50 0"></svg:path></svg:g>`,
})
export class OpenmojiBathtubIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
