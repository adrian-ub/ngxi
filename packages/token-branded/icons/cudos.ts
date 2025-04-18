import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedCudosIcon],svg[token-branded-cudos-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedCudos0)" fill-rule="evenodd" d="M18.359 5.631A9 9 0 1 0 5.64 18.368A9 9 0 0 0 18.36 5.631M11.5 19.999a7.95 7.95 0 0 1-5.374-2.465A8 8 0 0 1 4 12a8 8 0 0 1 2.125-5.54A7.95 7.95 0 0 1 11.5 4.002v2.995A4.96 4.96 0 0 0 8.27 8.61A4.98 4.98 0 0 0 7 12c0 1.25.426 2.46 1.27 3.384c.85.93 1.98 1.5 3.23 1.615zm6.359-2.465c-1.415 1.5-3.3 2.345-5.36 2.465v-3a5.02 5.02 0 0 0 3.215-8.393A4.93 4.93 0 0 0 12.5 7V4a7.87 7.87 0 0 1 6.984 5.02a8.07 8.07 0 0 1-1.625 8.513M11.999 16a4 4 0 1 0 0-8a4 4 0 0 0 0 8" clip-rule="evenodd"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedCudos0" x1="3.371" x2="20.334" y1="15.889" y2="7.796" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#2D9DFD"></svg:stop><svg:stop offset="1" stop-color="#36D5FD"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedCudosIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
