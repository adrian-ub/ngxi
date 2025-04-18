import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSlidersThinIcon],svg[ph-sliders-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M60 108.29V40a4 4 0 0 0-8 0v68.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-52.29a28 28 0 0 0 0-55.42M56 156a20 20 0 1 1 20-20a20 20 0 0 1-20 20m76-95.71V40a4 4 0 0 0-8 0v20.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0V115.71a28 28 0 0 0 0-55.42M128 108a20 20 0 1 1 20-20a20 20 0 0 1-20 20m100 60a28 28 0 0 0-24-27.71V40a4 4 0 0 0-8 0v100.29a28 28 0 0 0 0 55.42V216a4 4 0 0 0 8 0v-20.29A28 28 0 0 0 228 168m-28 20a20 20 0 1 1 20-20a20 20 0 0 1-20 20"></svg:path>`,
})
export class PhSlidersThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
