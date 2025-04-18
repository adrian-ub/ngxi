import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedNexoIcon],svg[token-branded-nexo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#3CA9E5" d="m7.671 4.502l8.817 4.961v5.063L3 6.939l4.325-2.43a.37.37 0 0 1 .346 0z"></svg:path><svg:path fill="#2853C3" d="m16.496 4.4l-4.499 2.53l4.499 2.531z"></svg:path><svg:path fill="#1A4199" d="m16.494 4.4l4.325 2.43a.35.35 0 0 1 .173.297v9.929l-4.498-2.525z"></svg:path><svg:path fill="#2853C3" d="m21 17.059l-4.332 2.433a.37.37 0 0 1-.367 0L7.484 14.53V9.456z"></svg:path><svg:path fill="#60BEFF" d="M3 6.93v9.93a.35.35 0 0 0 .173.31l4.325 2.43V9.463z"></svg:path><svg:path fill="#3CA9E5" d="m7.499 19.593l4.499-2.53l-4.499-2.539z"></svg:path></svg:g>`,
})
export class TokenBrandedNexoIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
