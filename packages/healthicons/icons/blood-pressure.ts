import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[healthiconsBloodPressureIcon],svg[healthicons-blood-pressure-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M6 18.724C6 12.641 10.036 7 15.563 7c3.835 0 6.68 2.53 8.437 6.121C25.756 9.531 28.602 7 32.438 7C37.965 7 42 12.642 42 18.724a14.5 14.5 0 0 1-.35 3.155A10.48 10.48 0 0 0 33.5 18C27.701 18 23 22.701 23 28.5a10.5 10.5 0 0 0 5.912 9.447C26.123 39.908 24 41 24 41S6 32.304 6 18.724"></svg:path><svg:path d="M36 29a2 2 0 1 1-3.97-.348l-2.42-2.42l1.415-1.414l2.299 2.3Q33.643 27 34 27a2 2 0 0 1 2 2"></svg:path><svg:path fill-rule="evenodd" d="M42 28.5a8.5 8.5 0 1 1-17 0a8.5 8.5 0 0 1 17 0m-2 0a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class HealthiconsBloodPressureIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
