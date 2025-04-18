import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[famiconsMailOpenOutlineIcon],svg[famicons-mail-open-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M441.6 171.61L266.87 85.37a24.57 24.57 0 0 0-21.74 0L70.4 171.61A40 40 0 0 0 48 207.39V392c0 22.09 18.14 40 40.52 40h335c22.38 0 40.52-17.91 40.52-40V207.39a40 40 0 0 0-22.44-35.78"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="32" d="M397.33 368L268.07 267.46a24 24 0 0 0-29.47 0L109.33 368m200-73l136-103m-384 0l139 105"></svg:path>`,
})
export class FamiconsMailOpenOutlineIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
