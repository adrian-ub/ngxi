import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineRamenDiningIcon],svg[ic-baseline-ramen-dining-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M9 6H8V4.65l1-.12zm0 6H8V7h1zM6 7h1v5H6zm0-2.12l1-.12V6H6zM22 3V2L5 4v8H2c0 3.69 2.47 6.86 6 8.25V22h8v-1.75c3.53-1.39 6-4.56 6-8.25H10V7h12V6H10V4.41z"></svg:path>`,
})
export class IcBaselineRamenDiningIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
