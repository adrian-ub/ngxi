import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidPizzaSliceIcon],svg[fa-solid-pizza-slice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M158.87.15c-16.16-1.52-31.2 8.42-35.33 24.12l-14.81 56.27c187.62 5.49 314.54 130.61 322.48 317l56.94-15.78c15.72-4.36 25.49-19.68 23.62-35.9C490.89 165.08 340.78 17.32 158.87.15m-58.47 112L.55 491.64a16.21 16.21 0 0 0 20 19.75l379-105.1c-4.27-174.89-123.08-292.14-299.15-294.1zM128 416a32 32 0 1 1 32-32a32 32 0 0 1-32 32m48-152a32 32 0 1 1 32-32a32 32 0 0 1-32 32m104 104a32 32 0 1 1 32-32a32 32 0 0 1-32 32"></svg:path>`,
})
export class FaSolidPizzaSliceIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
