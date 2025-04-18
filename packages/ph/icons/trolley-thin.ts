import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrolleyThinIcon],svg[ph-trolley-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M84 224a12 12 0 1 1-12-12a12 12 0 0 1 12 12m132-12a12 12 0 1 0 12 12a12 12 0 0 0-12-12m24-32H52V75.31a12 12 0 0 0-3.51-8.48L26.83 45.17a4 4 0 0 0-5.66 5.66l21.66 21.65A4 4 0 0 1 44 75.31V180H32a4 4 0 0 0 0 8h208a4 4 0 0 0 0-8"></svg:path>`,
})
export class PhTrolleyThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
