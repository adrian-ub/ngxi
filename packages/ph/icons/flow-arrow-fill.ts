import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phFlowArrowFillIcon],svg[ph-flow-arrow-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m245.66 85.66l-32 32a8 8 0 0 1-11.32-11.32L220.69 88H208c-38.67 0-46.59 19-56.62 43.08C141.05 155.88 129.33 184 80 184h-1a32 32 0 1 1 0-16h1c38.67 0 46.59-19 56.62-43.08C147 100.12 158.67 72 208 72h12.69l-18.35-18.34a8 8 0 0 1 11.32-11.32l32 32a8 8 0 0 1 0 11.32"></svg:path>`,
})
export class PhFlowArrowFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
