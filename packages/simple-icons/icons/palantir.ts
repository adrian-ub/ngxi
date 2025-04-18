import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[simpleIconsPalantirIcon],svg[simple-icons-palantir-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.147 18L12 21.178L3.853 18L2.5 20.343L12 24l9.5-3.657zM12 0a9.5 9.5 0 1 0 0 19a9.5 9.5 0 0 0 0-19m0 16.078a6.568 6.568 0 1 1 0-13.136a6.568 6.568 0 0 1 0 13.136"></svg:path>`,
})
export class SimpleIconsPalantirIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
