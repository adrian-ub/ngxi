import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiLuggageIcon],svg[openmoji-luggage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path d="m40.701 37.652l2.598 1.5l-1 1.732l-2.598-1.5zm-.365-2.366a1 1 0 0 0-.867.5l-2 3.464a1 1 0 0 0 .366 1.366l4.33 2.5a1 1 0 0 0 1.366-.366l2-3.464a1 1 0 0 0-.366-1.366l-4.33-2.5a1 1 0 0 0-.5-.135Zm-9.839-6.019a1.002 1.002 0 1 1-.497.135a1 1 0 0 1 .497-.135m0-2a3 3 0 1 0 2.601 1.5a2.99 2.99 0 0 0-2.6-1.5m27.999 15.001a1 1 0 1 1-.497.135a1 1 0 0 1 .497-.135m0-2a3 3 0 1 0 2.601 1.5a2.99 2.99 0 0 0-2.6-1.5m-25.199 7.384l1 1.732l-2.598 1.5l-1-1.732zm.365-2.366a1 1 0 0 0-.499.134l-4.33 2.5a1 1 0 0 0-.366 1.366l2 3.464a1 1 0 0 0 1.366.366l4.33-2.5a1 1 0 0 0 .366-1.366l-2-3.464a1 1 0 0 0-.867-.5M15 38.5v3h-2v-3zm1-2h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"></svg:path><svg:rect width="54" height="34" x="9" y="22" fill="#a57939" rx="3"></svg:rect><svg:rect width="4" height="38" x="19" y="20" fill="#6a462f" rx="1"></svg:rect><svg:rect width="4" height="38" x="49" y="20" fill="#6a462f" rx="1"></svg:rect><svg:rect width="7" height="6" x="38" y="36.268" fill="#e67a94" rx="1" transform="rotate(30 41.501 39.266)"></svg:rect><svg:circle cx="30.5" cy="30.268" r="3" fill="#fcea2b"></svg:circle><svg:circle cx="58.5" cy="43.269" r="3" fill="#61b2e4"></svg:circle><svg:rect width="7" height="6" x="29" y="46.268" fill="#f4aa41" rx="1" transform="rotate(-30 32.5 49.268)"></svg:rect><svg:rect width="7" height="6" x="10.5" y="37" fill="#b1cc33" rx="1" transform="rotate(90 14 40)"></svg:rect><svg:path fill="#a57939" d="M33.5 22v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2h3v-3.8a2.2 2.2 0 0 0-2.2-2.2h-6.6a2.2 2.2 0 0 0-2.2 2.2V22Z"></svg:path><svg:g fill="none" stroke="#000" stroke-width="2"><svg:path stroke-linejoin="round" d="M33.5 22v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2h3v-3.8a2.2 2.2 0 0 0-2.2-2.2h-6.6a2.2 2.2 0 0 0-2.2 2.2V22Z"></svg:path><svg:path stroke-miterlimit="10" d="M53 56h7a3 3 0 0 0 3-3V25a3 3 0 0 0-3-3h-7m-34 0h-7a3 3 0 0 0-3 3v28a3 3 0 0 0 3 3h7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m40.067 40.75l-1.732-1l2-3.464l3.031 1.75"></svg:path><svg:path stroke-linecap="round" stroke-miterlimit="10" d="M31.5 32a2 2 0 1 1-2-3.463m28 13a2 2 0 1 1 2 3.464"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m31.067 47.786l-1.732 1l2 3.464l3.031-1.75M12 39.5v-2h4V41"></svg:path><svg:rect width="4" height="38" x="19" y="20" stroke-miterlimit="10" rx="1"></svg:rect><svg:rect width="4" height="38" x="49" y="20" stroke-miterlimit="10" rx="1"></svg:rect><svg:path stroke-miterlimit="10" d="M23 22h26m0 34H23"></svg:path></svg:g>`,
})
export class OpenmojiLuggageIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
