import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowsClockwiseLightIcon],svg[ph-arrows-clockwise-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M222 48v48a6 6 0 0 1-6 6h-48a6 6 0 0 1 0-12h33.52l-18.05-18a81.5 81.5 0 0 0-57.53-24h-.46a81.5 81.5 0 0 0-57.29 23.28a6 6 0 1 1-8.38-8.58a93.38 93.38 0 0 1 65.67-26.76h.52a93.45 93.45 0 0 1 66 27.53l18 18V48a6 6 0 0 1 12 0m-34.19 136.72a81.5 81.5 0 0 1-57.29 23.34h-.46a81.5 81.5 0 0 1-57.53-24L54.48 166H88a6 6 0 0 0 0-12H40a6 6 0 0 0-6 6v48a6 6 0 0 0 12 0v-33.52l18 18.05a93.45 93.45 0 0 0 66 27.53h.52a93.38 93.38 0 0 0 65.67-26.76a6 6 0 1 0-8.38-8.58"></svg:path>`,
})
export class PhArrowsClockwiseLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
