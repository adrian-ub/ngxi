import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsMathIcon],svg[proicons-math-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M2.75 6.248h7m-3.5-3.5v7m8-3.5h7M3.45 20.552l2.8-2.8m0 0l2.8-2.8m-2.8 2.8l-2.8-2.8m2.8 2.8l2.8 2.8m5.2-4.9h7m-7 4.2h7"></svg:path>`,
})
export class ProiconsMathIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
