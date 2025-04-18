import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirWhatsappIcon],svg[iconoir-whatsapp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M22 12c0 5.523-4.477 10-10 10a9.96 9.96 0 0 1-5-1.338L2 21.5l.832-5.5A10 10 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10"></svg:path><svg:path d="m12.96 13.868l2.08-.406l1.96.753v1.823c0 .607-.522 1.07-1.11.94c-1.523-.334-4.29-1.174-6.212-3.11c-1.83-1.843-2.455-4.41-2.668-5.827C6.925 7.474 7.374 7 7.943 7h1.894l.735 1.969l-.389 2.101"></svg:path></svg:g>`,
})
export class IconoirWhatsappIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
