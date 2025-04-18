import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCirclesThreePlusLightIcon],svg[ph-circles-three-plus-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M80 42a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m96 12a38 38 0 1 0-38-38a38 38 0 0 0 38 38m0-64a26 26 0 1 1-26 26a26 26 0 0 1 26-26m-96 84a38 38 0 1 0 38 38a38 38 0 0 0-38-38m0 64a26 26 0 1 1 26-26a26 26 0 0 1-26 26m134-26a6 6 0 0 1-6 6h-26v26a6 6 0 0 1-12 0v-26h-26a6 6 0 0 1 0-12h26v-26a6 6 0 0 1 12 0v26h26a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhCirclesThreePlusLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
