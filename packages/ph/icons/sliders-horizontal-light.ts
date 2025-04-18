import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSlidersHorizontalLightIcon],svg[ph-sliders-horizontal-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M40 86h34.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12h-82.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12m64-24a18 18 0 1 1-18 18a18 18 0 0 1 18-18m112 108h-18.6a30 30 0 0 0-58.8 0H40a6 6 0 0 0 0 12h98.6a30 30 0 0 0 58.8 0H216a6 6 0 0 0 0-12m-48 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhSlidersHorizontalLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
