import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowIcon],svg[ph-flow-arrow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 74.34l-32-32a8 8 0 0 0-11.32 11.32L220.69 72H208c-49.33 0-61.05 28.12-71.38 52.92c-9.38 22.51-16.92 40.59-49.48 42.84a40 40 0 1 0 .1 16c43.26-2.65 54.34-29.15 64.14-52.69C161.41 107 169.33 88 208 88h12.69l-18.35 18.34a8 8 0 0 0 11.32 11.32l32-32a8 8 0 0 0 0-11.32M48 200a24 24 0 1 1 24-24a24 24 0 0 1-24 24"></svg:path>`,
})
export class PhFlowArrowIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
