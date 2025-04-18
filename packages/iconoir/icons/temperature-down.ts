import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirTemperatureDownIcon],svg[iconoir-temperature-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M5 12a5 5 0 1 0 6 0m-6 0V3h6v9m0-9h2m-2 3h2m-2 3h2"></svg:path><svg:path d="M8 14a2 2 0 1 0 0 4a2 2 0 0 0 0-4m0 0V6m11 0v12m0 0l2.5-2.5M19 18l-2.5-2.5"></svg:path></svg:g>`,
})
export class IconoirTemperatureDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
