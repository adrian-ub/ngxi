import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCertificateThinIcon],svg[ph-certificate-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M124 136a4 4 0 0 1-4 4H72a4 4 0 0 1 0-8h48a4 4 0 0 1 4 4m-4-36H72a4 4 0 0 0 0 8h48a4 4 0 0 0 0-8m108 59.74V224a4 4 0 0 1-6 3.47l-26-14.86l-26 14.86a4 4 0 0 1-6-3.47v-28H40a12 12 0 0 1-12-12V56a12 12 0 0 1 12-12h176a12 12 0 0 1 12 12v32.26a47.92 47.92 0 0 1 0 71.48M196 84a40 40 0 1 0 40 40a40 40 0 0 0-40-40m-32 104v-28.26a48 48 0 0 1 56-77.28V56a4 4 0 0 0-4-4H40a4 4 0 0 0-4 4v128a4 4 0 0 0 4 4Zm56-22.46a47.81 47.81 0 0 1-48 0v51.57l22-12.58a4 4 0 0 1 4 0l22 12.58Z"></svg:path>`,
})
export class PhCertificateThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
