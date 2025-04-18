import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[psArrowBoxIcon],svg[ps-arrow-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 277q0 28 18 46t46 18h170q28 0 46-18t18-46V107q0-28-18-46t-46-18H67q-28 0-46 18T3 107zm42-170q0-22 22-22h170q22 0 22 22v170q0 22-22 22H67q-22 0-22-22zm171 42H88q0-1 16 20.5t32 43.5l16 22z"></svg:path>`,
})
export class PsArrowBoxIcon {
  readonly viewBox = input("0 0 304 448")
  readonly width = input("0.68em")
  readonly height = input("1em")
}
