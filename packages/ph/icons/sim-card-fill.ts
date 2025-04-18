import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSimCardFillIcon],svg[ph-sim-card-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m213.66 82.34l-56-56A8 8 0 0 0 152 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V88a8 8 0 0 0-2.34-5.66M184 192a8 8 0 0 1-8 8h-16a4 4 0 0 1-4-4v-35.73a8.17 8.17 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v36a4 4 0 0 1-4 4h-16a4 4 0 0 1-4-4v-35.75a8.17 8.17 0 0 0-7.47-8.25a8 8 0 0 0-8.53 8v36a4 4 0 0 1-4 4H80a8 8 0 0 1-8-8V136a8 8 0 0 1 8-8h96a8 8 0 0 1 8 8Z"></svg:path>`,
})
export class PhSimCardFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
