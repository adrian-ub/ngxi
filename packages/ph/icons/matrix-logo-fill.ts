import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMatrixLogoFillIcon],svg[ph-matrix-logo-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16M80 200H64a8 8 0 0 1-8-8V64a8 8 0 0 1 8-8h16a8 8 0 0 1 0 16h-8v112h8a8 8 0 0 1 0 16m80-40a8 8 0 0 1-8-8v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-32a8 8 0 0 0-16 0v32a8 8 0 0 1-16 0v-48a8 8 0 0 1 13.66-5.65a23.94 23.94 0 0 1 26.34 3.78A24 24 0 0 1 168 120v32a8 8 0 0 1-8 8m40 32a8 8 0 0 1-8 8h-16a8 8 0 0 1 0-16h8V72h-8a8 8 0 0 1 0-16h16a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhMatrixLogoFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
