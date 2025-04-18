import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsLightIcon],svg[ph-math-operations-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M110 72a6 6 0 0 1-6 6H40a6 6 0 0 1 0-12h64a6 6 0 0 1 6 6m-6 106H78v-26a6 6 0 0 0-12 0v26H40a6 6 0 0 0 0 12h26v26a6 6 0 0 0 12 0v-26h26a6 6 0 0 0 0-12m48-4h64a6 6 0 0 0 0-12h-64a6 6 0 0 0 0 12m64 20h-64a6 6 0 0 0 0 12h64a6 6 0 0 0 0-12m-60.24-93.76a6 6 0 0 0 8.48 0L184 80.49l19.76 19.75a6 6 0 0 0 8.48-8.48L192.49 72l19.75-19.76a6 6 0 0 0-8.48-8.48L184 63.51l-19.76-19.75a6 6 0 0 0-8.48 8.48L175.51 72l-19.75 19.76a6 6 0 0 0 0 8.48"></svg:path>`,
})
export class PhMathOperationsLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
