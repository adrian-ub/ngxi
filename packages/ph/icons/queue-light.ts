import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phQueueLightIcon],svg[ph-queue-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M34 64a6 6 0 0 1 6-6h176a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6m102 58H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m0 64H40a6 6 0 0 0 0 12h96a6 6 0 0 0 0-12m110-26a6 6 0 0 1-2.82 5.09l-64 40A6 6 0 0 1 170 200v-80a6 6 0 0 1 9.18-5.09l64 40A6 6 0 0 1 246 160m-17.32 0L182 130.83v58.34Z"></svg:path>`,
})
export class PhQueueLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
