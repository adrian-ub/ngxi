import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phSwatchesFillIcon],svg[ph-swatches-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M240 155.91a16 16 0 0 0-1-5.22l-19.06-52.21A16 16 0 0 0 199.49 89l-67.81 24.57l12.08-69A16 16 0 0 0 130.84 26l-54.67-9.75a15.94 15.94 0 0 0-18.47 13l-25 143.12A43.82 43.82 0 0 0 75.78 224H224a16 16 0 0 0 16-16ZM76 196a16 16 0 1 1 16-16a16 16 0 0 1-16 16m42.72-8.38l9.78-55.92l76.42-27.7L224 156.11L116.78 195a45 45 0 0 0 1.94-7.38M224 208h-96.26L224 173.11Z"></svg:path>`,
})
export class PhSwatchesFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
