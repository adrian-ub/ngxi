import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoFillIcon],svg[ph-coda-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M136 128a40 40 0 0 0 40 40h.32c7.83.3 14-1.46 21.24-6.11A12 12 0 0 1 216 172v36a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V48a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16v36a12 12 0 0 1-18.47 10.1A40.23 40.23 0 0 0 136 128"></svg:path>`,
})
export class PhCodaLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
