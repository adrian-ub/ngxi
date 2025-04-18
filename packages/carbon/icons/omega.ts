import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonOmegaIcon],svg[carbon-omega-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.737 25A14.3 14.3 0 0 0 27 15c0-6.58-4.42-11-11-11S5 8.42 5 15a14.3 14.3 0 0 0 4.263 10H4v2h8v-2.238A12.57 12.57 0 0 1 7 15c0-5.467 3.533-9 9-9s9 3.533 9 9a12.57 12.57 0 0 1-5 9.762V27h8v-2Z"></svg:path>`,
})
export class CarbonOmegaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
