import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiCreditCardIcon],svg[openmoji-credit-card-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g stroke-miterlimit="10" stroke-width="2"><svg:path fill="#92D3F5" d="M59.959 52.794H12.04a1 1 0 0 1-1-1V22.247a1 1 0 0 1 1-1h47.92a1 1 0 0 1 1 1v29.547a1 1 0 0 1-1 1"></svg:path><svg:path fill="#3F3F3F" d="M60 31H12a1 1 0 0 1-1-1v-2.8a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1V30a1 1 0 0 1-1 1"></svg:path><svg:path fill="#FCEA2B" d="M20.998 47.8h-1.947a3.035 3.035 0 0 1-3.026-3.026v-1.948A3.035 3.035 0 0 1 19.05 39.8h1.947a3.035 3.035 0 0 1 3.027 3.027v1.947a3.035 3.035 0 0 1-3.027 3.026"></svg:path></svg:g><svg:g fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="2"><svg:path d="M59.959 52.794H12.04a1 1 0 0 1-1-1V22.247a1 1 0 0 1 1-1h47.92a1 1 0 0 1 1 1v29.547a1 1 0 0 1-1 1z"></svg:path><svg:path d="M60 31H12a1 1 0 0 1-1-1v-2.8a1 1 0 0 1 1-1h48a1 1 0 0 1 1 1V30a1 1 0 0 1-1 1z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20.998 47.8h-1.947a3.035 3.035 0 0 1-3.026-3.026v-1.948A3.035 3.035 0 0 1 19.05 39.8h1.947a3.035 3.035 0 0 1 3.027 3.027v1.947a3.035 3.035 0 0 1-3.027 3.026"></svg:path></svg:g>`,
})
export class OpenmojiCreditCardIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
