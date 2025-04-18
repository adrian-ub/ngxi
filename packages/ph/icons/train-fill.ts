import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phTrainFillIcon],svg[ph-train-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M184 24H72a32 32 0 0 0-32 32v128a32 32 0 0 0 32 32h8l-14.4 19.2a8 8 0 1 0 12.8 9.6L100 216h56l21.6 28.8a8 8 0 1 0 12.8-9.6L176 216h8a32 32 0 0 0 32-32V56a32 32 0 0 0-32-32M84 184a12 12 0 1 1 12-12a12 12 0 0 1-12 12m36-64H56V80h64Zm52 64a12 12 0 1 1 12-12a12 12 0 0 1-12 12m28-64h-64V80h64Z"></svg:path>`,
})
export class PhTrainFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
