import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBulldozerLightIcon],svg[ph-bulldozer-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M248 202h-8a10 10 0 0 1-10-10v-32a10 10 0 0 1 10-10h8a6 6 0 0 0 0-12h-8a22 22 0 0 0-22 22v10h-20.48a38.08 38.08 0 0 0-33.43-31.78l-36.5-87.61A14 14 0 0 0 114.67 42H24a14 14 0 0 0-14 14v96.72A38 38 0 0 0 40 214h120a38.05 38.05 0 0 0 37.52-32H218v10a22 22 0 0 0 22 22h8a6 6 0 0 0 0-12M116.51 55.23L151 138H62V54h52.67a2 2 0 0 1 1.84 1.23M24 54h26v84H40a37.8 37.8 0 0 0-18 4.54V56a2 2 0 0 1 2-2m136 148H40a26 26 0 0 1 0-52h120a26 26 0 0 1 0 52m6-26a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h120a6 6 0 0 1 6 6"></svg:path>`,
})
export class PhBulldozerLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
