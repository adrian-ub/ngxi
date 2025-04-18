import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phShieldCheckeredThinIcon],svg[ph-shield-checkered-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 44H48a12 12 0 0 0-12 12v56c0 51.16 24.73 82.12 45.47 99.1c22.4 18.32 44.55 24.5 45.48 24.76a4 4 0 0 0 2.1 0c.93-.26 23.08-6.44 45.48-24.76c20.74-17 45.47-47.94 45.47-99.1V56a12 12 0 0 0-12-12m4 12v56q0 6.12-.49 12H132V52h76a4 4 0 0 1 4 4M44 56a4 4 0 0 1 4-4h76v72H44.49q-.49-5.88-.49-12Zm1.38 76H124v94.44a135.2 135.2 0 0 1-37.71-21.73C63.27 185.78 49.56 161.38 45.38 132m124.33 72.71A134.9 134.9 0 0 1 132 226.44V132h78.62c-4.18 29.38-17.89 53.78-40.91 72.71"></svg:path>`,
})
export class PhShieldCheckeredThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
