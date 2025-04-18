import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phStepsThinIcon],svg[ph-steps-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M244 56a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4h-52v44a4 4 0 0 1-4 4H76v44a4 4 0 0 1-4 4H16a4 4 0 0 1 0-8h52v-44a4 4 0 0 1 4-4h52v-44a4 4 0 0 1 4-4h52V56a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4"></svg:path>`,
})
export class PhStepsThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
