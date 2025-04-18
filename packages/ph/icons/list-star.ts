import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phListStarIcon],svg[ph-list-star-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M32 64a8 8 0 0 1 8-8h176a8 8 0 0 1 0 16H40a8 8 0 0 1-8-8m8 72h56a8 8 0 0 0 0-16H40a8 8 0 0 0 0 16m72 48H40a8 8 0 0 0 0 16h72a8 8 0 0 0 0-16m125.09-40.22l-22.52 18.59l6.86 27.71a8 8 0 0 1-11.82 8.81L184 183.82l-25.61 15.07a8 8 0 0 1-11.82-8.81l6.85-27.71l-22.51-18.59a8 8 0 0 1 4.47-14.14l29.84-2.31l11.43-26.5a8 8 0 0 1 14.7 0l11.43 26.5l29.84 2.31a8 8 0 0 1 4.47 14.14m-25.47.28l-14.89-1.15a8 8 0 0 1-6.73-4.8l-6-13.92l-6 13.92a8 8 0 0 1-6.73 4.8l-14.89 1.15l11.11 9.18a8 8 0 0 1 2.68 8.09l-3.5 14.12l13.27-7.81a8 8 0 0 1 8.12 0l13.27 7.81l-3.5-14.12a8 8 0 0 1 2.68-8.09Z"></svg:path>`,
})
export class PhListStarIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
