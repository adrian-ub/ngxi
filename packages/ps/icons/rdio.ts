import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psRdioIcon],svg[ps-rdio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M400 165q2 18 2 27q0 79-58.5 135.5T202 384T60.5 328T2 192T60.5 56T202 0q32 0 62 9v117q-7-4-18.5-8.5t-41-4T151 131t-34.5 36.5T107 198l1 12q0 3 .5 7t5 15t12 19t23 15t36.5 7q37 0 64-19.5t35-38.5l9-19V21q23 11 46 30q59 36 115 35q1 0 2.5.5T459 88t2 4.5t1 7.5q0 16-12 29q-16 25-50 36"></svg:path>`,
})
export class PsRdioIcon {
  readonly viewBox = input("0 0 464 448")
  readonly width = input("1.04em")
  readonly height = input("1em")
}
