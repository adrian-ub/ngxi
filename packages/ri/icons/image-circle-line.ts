import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riImageCircleLineIcon],svg[ri-image-circle-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19.576 14.576l-3.87-3.869a1 1 0 0 0-1.413 0l-7.428 7.428a8 8 0 1 1 12.711-3.558M8.59 19.24L15 12.83l3.639 3.638A8 8 0 0 1 12 20a8 8 0 0 1-3.41-.761M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10m-1-12a2 2 0 1 1-4 0a2 2 0 0 1 4 0"></svg:path>`,
})
export class RiImageCircleLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
