import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phNotSupersetOfIcon],svg[ph-not-superset-of-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 192H80.63l21.82-24H152a64 64 0 0 0 47.54-106.8l14.38-15.82a8 8 0 0 0-11.84-10.76l-14.65 16.11A63.66 63.66 0 0 0 152 40H56a8 8 0 0 0 0 16h96a47.7 47.7 0 0 1 24.51 6.75L95.37 152H56a8 8 0 0 0 0 16h24.82l-38.74 42.62a8 8 0 1 0 11.84 10.76L66.08 208H208a8 8 0 0 0 0-16M188.71 73.12A48 48 0 0 1 152 152h-35Z"></svg:path>`,
})
export class PhNotSupersetOfIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
