import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiFlagPitcairnIslandsIcon],svg[openmoji-flag-pitcairn-islands-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#1e50a0" d="M5 17h62v38H5z"></svg:path><svg:path fill="#fff" d="M9.887 18H6v2.332L32.113 36H36v-2.332z"></svg:path><svg:path fill="#fff" d="M36 20.332V18h-3.887L6 33.668V36h3.887z"></svg:path><svg:path fill="#fff" d="M6 24h30v6H6z"></svg:path><svg:path fill="#fff" d="M18 18h6v18h-6z"></svg:path><svg:path fill="#d22f27" d="M20 18h2v18h-2z"></svg:path><svg:path fill="#d22f27" d="M6 26h30v2H6zm30 7.668L29.887 30H26l10 6zM36 18h-3.887L24 22.868V24h2zM6 20.332L12.113 24H16L6 18zM6 36h3.887L18 31.132V30h-2z"></svg:path><svg:path fill="#9b9b9a" stroke="#9b9b9a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m48 30l5-5"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M58 29c3.074 4.762-.801 9.156-4 10m1.832.955c2 2 2.955 6.255.168 10.045"></svg:path><svg:path fill="none" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M53 38.5q6 0 9 3"></svg:path><svg:path fill="none" stroke="#fcea2b" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M44 29c-3.074 4.762.801 9.156 4 10m-1.832.955c-2 2-2.955 6.255-.168 10.045"></svg:path><svg:path fill="none" stroke="#5c9e31" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M49 38.5q-6 0-9 3"></svg:path><svg:path fill="#9b9b9a" stroke="#9b9b9a" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M50 36v-8l1-1l3 9"></svg:path><svg:path fill="#61b2e4" stroke="#61b2e4" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M55 35v3.625c0 5.625-1.333 8.125-4 9.375c-2.667-1.25-4-3.75-4-9.375V35Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 17h62v38H5z"></svg:path>`,
})
export class OpenmojiFlagPitcairnIslandsIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
