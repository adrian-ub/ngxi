import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalThinIcon],svg[ph-sliders-horizontal-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 84h36.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8h-84.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8m64-24a20 20 0 1 1-20 20a20 20 0 0 1 20-20m112 112h-20.29a28 28 0 0 0-55.42 0H40a4 4 0 0 0 0 8h100.29a28 28 0 0 0 55.42 0H216a4 4 0 0 0 0-8m-48 24a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhSlidersHorizontalThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
