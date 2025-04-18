import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCodaLogoIcon],svg[ph-coda-logo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176 88a39.8 39.8 0 0 1 21.53 6.1A12 12 0 0 0 216 84V48a16 16 0 0 0-16-16H56a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16v-36a12 12 0 0 0-18.44-10.11c-7.25 4.65-13.41 6.41-21.24 6.11H176a40 40 0 0 1 0-80m-56 40a56.07 56.07 0 0 0 55.84 56a48.37 48.37 0 0 0 24.16-5.11V208H56V48h144v29.23A56.3 56.3 0 0 0 120 128"></svg:path>`,
})
export class PhCodaLogoIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
