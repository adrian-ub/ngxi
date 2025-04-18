import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSpinnerThinIcon],svg[ph-spinner-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M132 32v32a4 4 0 0 1-8 0V32a4 4 0 0 1 8 0m41.25 54.75a4 4 0 0 0 2.83-1.18L198.71 63a4 4 0 0 0-5.66-5.66l-22.62 22.58a4 4 0 0 0 2.82 6.83M224 124h-32a4 4 0 0 0 0 8h32a4 4 0 0 0 0-8m-47.92 46.43a4 4 0 1 0-5.65 5.65l22.62 22.63a4 4 0 0 0 5.66-5.66ZM128 188a4 4 0 0 0-4 4v32a4 4 0 0 0 8 0v-32a4 4 0 0 0-4-4m-48.08-17.57l-22.63 22.62a4 4 0 0 0 5.71 5.66l22.62-22.63a4 4 0 1 0-5.65-5.65ZM68 128a4 4 0 0 0-4-4H32a4 4 0 0 0 0 8h32a4 4 0 0 0 4-4m-5-70.71A4 4 0 0 0 57.29 63l22.63 22.57a4 4 0 1 0 5.65-5.65Z"></svg:path>`,
})
export class PhSpinnerThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
