import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagKyrgyzstanIcon],svg[openmoji-flag-kyrgyzstan-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#d22f27" d="M5 17h62v38H5z"></svg:path><svg:path fill="#f1b31c" stroke="#f1b31c" stroke-linecap="round" stroke-linejoin="round" d="m36 30l1.326-4.92l.11 5.094l2.465-4.459l-1.113 4.972l3.461-3.74l-2.27 4.562l4.255-2.803l-3.296 3.886l4.802-1.704l-4.13 2.984l5.07-.504l-4.724 1.909L47 36l-5.044.723l4.724 1.909l-5.07-.504l4.13 2.984l-4.802-1.704l3.296 3.886l-4.255-2.803l2.27 4.562l-3.461-3.74l1.113 4.972l-2.465-4.459l-.11 5.094L36 42l-1.326 4.92l-.11-5.094l-2.465 4.459l1.113-4.972l-3.461 3.74l2.27-4.562l-4.255 2.803l3.296-3.886l-4.802 1.704l4.13-2.984l-5.07.504l4.724-1.909L25 36l5.044-.723l-4.724-1.909l5.07.504l-4.13-2.984l4.802 1.704l-3.296-3.886l4.255 2.803l-2.27-4.562l3.461 3.74l-1.113-4.972l2.465 4.459l.11-5.094z"></svg:path><svg:circle cx="36" cy="36" r="6" fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M30.55 33.502a5.992 5.992 0 0 0 9.47 6.943a10 10 0 0 0-9.47-6.943"></svg:path><svg:path fill="none" stroke="#d22f27" stroke-linecap="round" stroke-linejoin="round" d="M41.45 33.502a5.992 5.992 0 0 1-9.47 6.943a10 10 0 0 1 9.47-6.943"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagKyrgyzstanIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
