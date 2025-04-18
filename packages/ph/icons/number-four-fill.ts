import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNumberFourFillIcon],svg[ph-number-four-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M104.65 144L144 94.81V144ZM216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16m-32 112a8 8 0 0 0-8-8h-16V72a8 8 0 0 0-14.25-5l-64 80A8 8 0 0 0 88 160h56v24a8 8 0 0 0 16 0v-24h16a8 8 0 0 0 8-8"></svg:path>`,
})
export class PhNumberFourFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
