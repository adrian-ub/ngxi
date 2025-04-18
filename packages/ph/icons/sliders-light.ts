import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSlidersLightIcon],svg[ph-sliders-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M62 106.6V40a6 6 0 0 0-12 0v66.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-50.6a30 30 0 0 0 0-58.8M56 154a18 18 0 1 1 18-18a18 18 0 0 1-18 18m78-95.4V40a6 6 0 0 0-12 0v18.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-98.6a30 30 0 0 0 0-58.8m-6 47.4a18 18 0 1 1 18-18a18 18 0 0 1-18 18m102 62a30.05 30.05 0 0 0-24-29.4V40a6 6 0 0 0-12 0v98.6a30 30 0 0 0 0 58.8V216a6 6 0 0 0 12 0v-18.6a30.05 30.05 0 0 0 24-29.4m-30 18a18 18 0 1 1 18-18a18 18 0 0 1-18 18"></svg:path>`,
})
export class PhSlidersLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
