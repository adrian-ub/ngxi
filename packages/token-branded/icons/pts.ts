import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tokenBrandedPtsIcon],svg[token-branded-pts-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#tokenBrandedPts0)" d="M11.1 3.739A6.84 6.84 0 0 0 7.32 6.24c-.409.612-.66 1.398-2.16 6.731a112 112 0 0 1-1.95 6.498c-.139.252-.234.57-.204.702c.042.222.168.24 1.5.222c1.847-.018 2.25-.096 2.67-.522c.545-.558.743-1.08 1.547-4.11c1.116-4.218 1.818-6.42 2.202-6.93c.714-.971 2.076-1.031 3.744-1.031c1.404 0 1.44-.162.504 3.12c-.414 1.44-1.734 2.364-3.612 2.52c-.48.035-.948.12-1.032.191c-.21.174-.198 1.297.018 1.728c.606 1.182 2.1 1.41 3.336 1.44c2.112.06 3.678-.978 4.746-3.24c.732-1.542.948-2.322 1.38-4.913c.216-1.284.564-2.88.78-3.54c.096-.288.162-.6.204-.87c.054-.342-.222-.636-.57-.636h-4.158s-4.59-.006-5.172.138z"></svg:path><svg:defs><svg:lineargradient id="tokenBrandedPts0" x1="3.312" x2="22.295" y1="18.984" y2="15.144" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#FD8C30"></svg:stop><svg:stop offset=".54" stop-color="#C720B6"></svg:stop><svg:stop offset=".8" stop-color="#9246E2"></svg:stop><svg:stop offset="1" stop-color="#6966FF"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class TokenBrandedPtsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
